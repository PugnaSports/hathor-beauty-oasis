import facialImg from "@/assets/hathor-facial.jpg";
import corporalImg from "@/assets/hathor-corporal.jpg";
import laserImg from "@/assets/hathor-laser.jpg";
import capilarImg from "@/assets/hathor-capilar.jpg";
import aparatologiaImg from "@/assets/hathor-aparatologia.jpg";
import asesoramientoImg from "@/assets/hathor-asesoramiento.jpg";
import productEggShampoo from "@/assets/product-egg-shampoo.png.asset.json";
import productEyeWrinkle from "@/assets/product-eye-wrinkle.png.asset.json";
import productProbio6Shampoo from "@/assets/product-probio6-shampoo.png.asset.json";
import productDaywearBb from "@/assets/product-daywear-bb.png.asset.json";
import productPowerActive from "@/assets/product-power-active.png.asset.json";
import productAdvancedBrilliant from "@/assets/product-advanced-brilliant.png.asset.json";
import productBoostingCream from "@/assets/product-boosting-cream.png.asset.json";
import productRestorationMechanism from "@/assets/product-restoration-mechanism.png.asset.json";
import productProbio6Body from "@/assets/product-probio6-body.png.asset.json";
import productTurm9 from "@/assets/product-turm9.png.asset.json";

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
  items?: string[];
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
    items: [
      "Hollywood peel",
      "Biorregeneración facial",
      "Tratamientos con células madre",
      "Tratamientos con células madre premium",
      "Tratamientos con exosomas",
      "Peeling químico suave",
      "Tratamiento de ojeras",
    ],
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
    items: ["Eliminación de celulitis", "Reafirmación corporal"],
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
    items: ["Láser corporal indoloro", "Eliminación de tatuajes"],
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
    items: [
      "Láser capilar",
      "Vitaminas capilares",
      "Seguimiento y valoración especializada",
    ],
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
    items: [
      "Diagnóstico y seguimiento",
      "Personalización de protocolos",
      "Tecnología de apoyo al tratamiento (Prysm iO)",
    ],
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
    items: [
      "Valoración previa",
      "Rutina recomendada",
      "Acompañamiento durante el proceso",
      "Plan adaptado a cada persona",
    ],
  },
];

export function getTreatmentBySlug(slug: string) {
  return TREATMENTS.find((t) => t.slug === slug);
}

export type ProductCategory = {
  slug: "facial" | "capilar" | "corporal" | "solar";
  name: string;
  description: string;
  products: Product[];
};

export type Product = {
  name: string;
  format: string;
  ref?: string;
  size?: string;
  description: string;
  image?: string;
};

export const PRODUCTS: ProductCategory[] = [
  {
    slug: "facial",
    name: "Facial",
    description:
      "Packs y rutinas profesionales pensadas para cuidar la piel en casa y mantener los resultados de cabina.",
    products: [
      {
        name: "Eye Wrinkle Smooth Out",
        format: "Crema · Contorno de ojos",
        ref: "00348",
        size: "30 ml",
        description:
          "Difumina arrugas, bolsas y ojeras. Contorno de ojos de fórmula vanguardista a base de ADN de salmón, un complejo de 6 péptidos, adenosina y fitoesteroles de granada.",
        image: productEyeWrinkle.url,
      },
      {
        name: "Daywear BB Expert Cream #23 / #29",
        format: "Crema · Facial",
        ref: "01044 / 00354",
        size: "45 ml / 40 ml",
        description:
          "Tiene una triple función: antienvejecimiento, antiarrugas y despigmentante. Alta protección solar, base de maquillaje con cobertura editable y tratamiento de la piel en una sola crema.",
        image: productDaywearBb.url,
      },
      {
        name: "Advanced Brilliant Recovery Cream",
        format: "Crema · Facial",
        ref: "00370",
        size: "30 ml",
        description:
          "Crema antiedad con péptidos y numerosos extractos botánicos.",
        image: productAdvancedBrilliant.url,
      },
      {
        name: "Restoration Mechanism Apply Cream",
        format: "Crema · Facial",
        ref: "00370",
        size: "30 ml",
        description:
          "Crema para piel irritada y para el acné. Contiene Jaswongo, un ungüento a base de una mezcla de hierbas usado en medicina tradicional, un producto multiusos para aliviar los síntomas de las alteraciones más severas de la piel.",
        image: productRestorationMechanism.url,
      },
      {
        name: "Türm 9 Gentle For Man",
        format: "Esencia y crema · Facial",
        ref: "00410",
        size: "50 ml",
        description:
          "Crema para hombre antiedad que además previene alteraciones en la piel por los efectos de la radiación solar y elimina daños ya producidos por el sol. Pensada para quien busca una rutina sencilla: es un \"todo en uno\" que combina Esencia y Crema.",
        image: productTurm9.url,
      },
    ],
  },
  {
    slug: "capilar",
    name: "Capilar",
    description:
      "Productos profesionales para cuidar el cuero cabelludo y la salud del cabello en casa.",
    products: [
      {
        name: "EGG Neural Cell Enhancing Shampoo",
        format: "Champú · Capilar",
        ref: "02227",
        size: "500 g",
        description:
          "Nutre y fortalece la raíz del cabello y el cuero cabelludo, ayudando a reducir y ralentizar la pérdida de pelo.",
        image: productEggShampoo.url,
      },
      {
        name: "Probio 6 — Melanocell Shampoo",
        format: "Champú · Capilar",
        ref: "02226",
        size: "400 g",
        description:
          "Champú anticaída de acción probiótica que equilibra el microbioma del cuero cabelludo, estimula el crecimiento del cabello y ayuda a prevenir el encanecimiento prematuro, todo en un solo paso.",
        image: productProbio6Shampoo.url,
      },
    ],
  },
  {
    slug: "corporal",
    name: "Corporal",
    description:
      "Cremas para prolongar y mantener en casa los resultados de los protocolos corporales.",
    products: [
      {
        name: "Power Active Cream",
        format: "Crema · Corporal",
        ref: "00367 / 00366",
        size: "70 ml / 280 ml",
        description:
          "Crema anticelulítica con efecto calor que actúa activando la circulación. Excelente para remodelar la silueta por su potente efecto quemagrasas, anticelulítico, reafirmante, antiinflamatorio y activador de la circulación. Sus efectos se notan desde la primera aplicación.",
        image: productPowerActive.url,
      },
      {
        name: "Boosting Cream",
        format: "Crema · Facial y corporal",
        ref: "00367 / 00366",
        size: "80 ml / 520 ml",
        description:
          "Crema hidratante y reafirmante, la pareja perfecta de la Power Active Cream para tratamientos corporales. La sinergia de ambas cremas potencia sus propiedades reafirmantes y tensoras. Incluye lípidos con la misma estructura química que los lípidos naturales de la piel, que penetran en las capas más profundas reparando los daños que pudieran haber.",
        image: productBoostingCream.url,
      },
      {
        name: "Probio 6 Body Lotion",
        format: "Loción · Corporal",
        ref: "00376",
        size: "300 ml",
        description:
          "Loción hidratante con prebióticos. Hidrata la piel de forma inmediata y mejora su luminosidad, uniformidad, firmeza y textura a medio y largo plazo.",
        image: productProbio6Body.url,
      },
    ],
  },
  {
    slug: "solar",
    name: "Solar",
    description:
      "Fotoprotección de uso diario, imprescindible para cuidar la piel y mantener cualquier tratamiento.",
    products: [
      {
        name: "Protector solar SPF 50 para pieles sensibles",
        format: "Protector solar · Facial",
        description:
          "Alta protección de uso diario, formulada para pieles sensibles o reactivas.",
      },
      {
        name: "Crema con color con protector solar",
        format: "Crema con color · Facial",
        description:
          "Unifica el tono y aporta protección solar en un solo gesto.",
      },
    ],
  },
];

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