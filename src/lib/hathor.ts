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
import productSakuradin from "@/assets/product-sakuradin.png.asset.json";
import productTimeslipCica from "@/assets/product-timeslip-cica.png.asset.json";
import productUltraHydrating from "@/assets/product-ultra-hydrating.png.asset.json";
import productEggBubble from "@/assets/product-egg-bubble.png.asset.json";
import productHydrateGlowSet from "@/assets/product-hydrate-glow-set.png.asset.json";
import productRoseWaterMilk from "@/assets/product-rose-water-milk.png.asset.json";
import productRestacneSet from "@/assets/product-restacne-set.png.asset.json";
import productMultiRecoverySet from "@/assets/product-multi-recovery-set.png.asset.json";
import productResistenceSet from "@/assets/product-resistence-set.png.asset.json";
import productEggRoutineSet from "@/assets/product-egg-routine-set.png.asset.json";
import productLenclosPdrn from "@/assets/product-lenclos-pdrn.png.asset.json";
import productToneUpSolar from "@/assets/product-tone-up-solar.png.asset.json";
import productDrTufetSet from "@/assets/product-dr-tufet-set.png.asset.json";
import productDailySunscreen from "@/assets/product-daily-sunscreen.png.asset.json";
import productReverseSet from "@/assets/product-reverse-set.png.asset.json";
import productDoubleIntensifySerum from "@/assets/product-double-intensify-serum.png.asset.json";
import productEggBpSerum from "@/assets/product-egg-bp-serum.png.asset.json";
import productSuperbCoreSerum from "@/assets/product-superb-core-serum.png.asset.json";
import productBrilliantSkinSerum from "@/assets/product-brilliant-skin-serum.png.asset.json";
import productDermaMelazero from "@/assets/product-derma-melazero.png.asset.json";
import productMetabolismPropolisSerum from "@/assets/product-metabolism-propolis-serum.png.asset.json";
import productEggScalpRevitalizer from "@/assets/product-egg-scalp-revitalizer.png.asset.json";
import productHydraRadianceMist from "@/assets/product-hydra-radiance-mist.png.asset.json";

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
      "Cuidamos tu rostro con criterio sanitario, respetando tus rasgos y buscando un resultado natural.",
    image: facialImg,
    description:
      "Trabajamos el rostro desde un enfoque sanitario: primero te escuchamos, valoramos tu piel y, a partir de ahí, te proponemos solo lo que tiene sentido para ti. El objetivo es cuidar la calidad de la piel y suavizar lo que te preocupa sin perder naturalidad ni cambiar tu expresión.",
    benefits: [
      "Enfoque natural, sin perder expresión",
      "Mejor calidad e hidratación de la piel",
      "Prevención y cuidado del envejecimiento",
      "Plan adaptado a tu edad y a tu momento",
    ],
    indications: [
      "Quien busca un cuidado facial sin cambios bruscos",
      "Pieles apagadas, deshidratadas o con signos de cansancio",
      "Personas que quieren prevenir o suavizar líneas de expresión",
    ],
    experience: [
      "Valoración inicial y escucha de tus objetivos",
      "Análisis del rostro y propuesta de plan",
      "Sesión en clínica con técnicas mínimamente invasivas",
      "Seguimiento cercano de tu evolución",
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
      "Protocolos corporales pensados para tu piel y tus objetivos, con una evolución progresiva.",
    image: corporalImg,
    description:
      "Trabajamos el cuerpo con un enfoque progresivo: valoramos la zona, escuchamos lo que quieres mejorar y combinamos aparatología y rutina en casa para acompañar la evolución de tu piel. Sin promesas, con un plan realista y un seguimiento cercano.",
    benefits: [
      "Cuidado de la firmeza y la elasticidad",
      "Trabajo enfocado en zonas concretas",
      "Protocolos progresivos y no invasivos",
      "Evolución gradual con seguimiento",
    ],
    indications: [
      "Quien quiere cuidar la calidad de su piel corporal",
      "Zonas con flacidez, retención o irregularidades",
      "Personas que buscan un plan de mantenimiento",
    ],
    experience: [
      "Valoración corporal y escucha de objetivos",
      "Plan de sesiones a medida",
      "Trabajo en cabina con aparatología profesional",
      "Pautas y recomendaciones para casa",
    ],
    whatsappMessage:
      "Hola! Me gustaría pedir cita para un tratamiento corporal.",
    items: ["Eliminación de celulitis", "Reafirmación corporal"],
  },
  {
    slug: "laser",
    name: "Láser",
    short:
      "Tratamientos láser con valoración previa de tu piel, tu fototipo y la zona a tratar.",
    image: laserImg,
    description:
      "Antes de empezar cualquier sesión de láser hacemos una valoración para revisar el estado de tu piel, tu fototipo y la zona que quieres tratar. A partir de ahí te explicamos con claridad qué se puede hacer, cuántas sesiones suelen ser necesarias y los cuidados que conlleva.",
    benefits: [
      "Aplicación precisa y controlada",
      "Evolución progresiva sesión a sesión",
      "Protocolo adaptado a tu fototipo",
      "Compatible con tu rutina diaria",
    ],
    indications: [
      "Quien quiere tratar vello no deseado de forma estable",
      "Pieles con manchas o lesiones superficiales valorables",
      "Personas que prefieren tratamientos no invasivos",
    ],
    experience: [
      "Valoración previa de la piel y la zona",
      "Explicación de la pauta y de las sesiones",
      "Sesiones en cabina con tecnología profesional",
      "Pautas de cuidado posteriores personalizadas",
    ],
    whatsappMessage:
      "Hola! Me gustaría pedir cita para un tratamiento láser.",
    items: ["Láser corporal indoloro", "Eliminación de tatuajes"],
  },
  {
    slug: "medicina-capilar",
    name: "Medicina capilar",
    short:
      "Valoración capilar con criterio médico para cuidar la salud de tu cuero cabelludo y tu cabello.",
    image: capilarImg,
    description:
      "Contamos con un médico especialista en medicina capilar que valora el estado de tu cuero cabelludo y de tu cabello antes de proponerte nada. A partir de ese diagnóstico diseñamos un plan adaptado para acompañar la caída, cuidar la densidad y mantener el cuero cabelludo en buen estado.",
    benefits: [
      "Diagnóstico capilar con criterio médico",
      "Plan para acompañar y cuidar la caída",
      "Cuidado específico del cuero cabelludo",
      "Revisión y seguimiento periódicos",
    ],
    indications: [
      "Personas con caída del cabello o pérdida de densidad",
      "Cuero cabelludo sensible, graso o con irritación",
      "Quien quiere prevenir y cuidar su salud capilar",
    ],
    experience: [
      "Diagnóstico capilar con aparatología",
      "Valoración con el médico especialista",
      "Tratamientos en clínica y pautas en casa",
      "Revisión periódica de la evolución",
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
      "Usamos la tecnología Prysm iO para diagnosticar y ajustar cada plan a la evolución real de tu piel y tu cabello.",
    image: aparatologiaImg,
    description:
      "La aparatología Prysm iO nos permite hacer un análisis objetivo de tu piel y tu cuero cabelludo, ver cómo evolucionan con cada sesión y ajustar el plan en función de datos reales, no de impresiones. Es una herramienta de apoyo, no un tratamiento en sí: nos ayuda a recomendarte solo lo que de verdad necesitas.",
    benefits: [
      "Análisis detallado de la piel",
      "Seguimiento objetivo de tu evolución",
      "Plan ajustado a partir de datos reales",
      "Valoración capilar avanzada",
    ],
    indications: [
      "Quien quiere un diagnóstico estético objetivo",
      "Personas con un plan estético o capilar a medida",
      "Tratamientos que requieren seguimiento preciso",
    ],
    experience: [
      "Análisis con aparatología Prysm iO",
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
      "Una primera conversación para escucharte y orientarte sin compromiso.",
    image: asesoramientoImg,
    description:
      "Empezamos siempre por escucharte. La valoración personalizada nos sirve para entender qué te gustaría mejorar, revisar tu piel y/o tu cabello y proponerte un plan realista adaptado a tu momento, tu rutina y tus tiempos. Si no es necesario hacer nada, también te lo decimos.",
    benefits: [
      "Recomendaciones honestas, sin compromiso",
      "Plan ajustado a tus objetivos reales",
      "Visión integral: estética, piel y cabello",
      "Información clara sobre cada tratamiento",
    ],
    indications: [
      "Personas que no saben por dónde empezar",
      "Quien quiere una segunda opinión sanitaria",
      "Quien prefiere un plan a medida y no un protocolo estándar",
    ],
    experience: [
      "Conversación inicial para escucharte",
      "Valoración de piel y/o cabello",
      "Propuesta de plan personalizado",
      "Resolución de dudas con calma",
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

export function getProductCategoryBySlug(slug: string) {
  return PRODUCTS.find((c) => c.slug === slug);
}

export type ProductCategory = {
  slug: "facial" | "capilar" | "corporal" | "solar" | "limpieza" | "sets";
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
      "Cremas, sérums y rutinas para cuidar la piel del rostro en casa entre sesiones.",
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
      {
        name: "Sakuradin Texture Cream",
        format: "Crema · Facial",
        ref: "00443",
        size: "35 g",
        description:
          "Crema facial regenerante especial para pieles sensibles con acción regenerante. Restaura la barrera cutánea. Especial para pieles sensibles.",
        image: productSakuradin.url,
      },
      {
        name: "Timeslip Cica Gel Cream",
        format: "Crema · Facial",
        ref: "00360 / 00418",
        size: "70 ml / 250 ml",
        description:
          "Antiacné y piel sensible. Para pieles secas, acneicas e irritadas. Hidrata y devuelve juventud a la piel. Contiene Centella asiática, Asioticosida y Madecassoside, GABA, Dipéptido-15.",
        image: productTimeslipCica.url,
      },
      {
        name: "Ultra Hydrating Cream",
        format: "Crema · Facial",
        ref: "00381",
        size: "30 ml",
        description:
          "Crema hidratante. Repara la piel, protege la barrera cutánea evitando la pérdida de agua transepidérmica.",
        image: productUltraHydrating.url,
      },
      {
        name: "Double Intensify Effect Core Sérum",
        format: "Sérum · Facial",
        ref: "00331",
        size: "50 ml",
        description:
          "Sérum antiacné. Especialmente indicado para pieles acneicas y sensibles, pieles con rojeces, rosácea, picor, ardor, etc.",
        image: productDoubleIntensifySerum.url,
      },
      {
        name: "Egg BP Cell Sérum",
        format: "Sérum · Facial",
        ref: "00910",
        description:
          "Sérum facial antiedad con acción antienvejecimiento y efecto despigmentante. Difumina arrugas, repara en profundidad y devuelve luminosidad a la piel. Sérum para el rostro a partir de células madre pluripotentes.",
        image: productEggBpSerum.url,
      },
      {
        name: "Superb Amazing Result Core Sérum",
        format: "Sérum · Facial",
        ref: "00328",
        size: "50 ml",
        description:
          "Sérum antiedad efecto lifting. Contiene tripéptidos con efecto \"bótox\", además de pantenol, extractos botánicos, ácido hialurónico y vitaminas.",
        image: productSuperbCoreSerum.url,
      },
      {
        name: "Brilliant Skin Restore EF Core Sérum",
        format: "Sérum · Facial",
        ref: "00361",
        size: "50 ml",
        description:
          "Sérum antiedad con Hialuronato de sodio, polipéptidos y extractos botánicos. Ingredientes que presentan una gran efectividad en la regeneración de la piel dañada o envejecida.",
        image: productBrilliantSkinSerum.url,
      },
      {
        name: "Derma Melazero",
        format: "Sérum · Facial",
        ref: "00351",
        size: "30 ml",
        description:
          "Sérum antimanchas: sérum fermentado elaborado con una fórmula despigmentante avanzada que trata diversos tipos de la edad como arrugas o flacidez, aunque su propiedad más potente es la despigmentante debido al gran número de activos despigmentantes patentados de última generación como el Melazero y Gigawhite. Inhibe la producción de melanina y elimina la ya existente en pocos días.",
        image: productDermaMelazero.url,
      },
      {
        name: "Metabolism Active Propolis Sérum",
        format: "Sérum · Facial",
        ref: "00329",
        size: "50 ml",
        description:
          "Sérum facial ideal para piel sensible: este sérum antiedad y despigmentante, enriquecido con el complejo patentado NAFLEX™ 7, calma, protege y revitaliza tu piel, proporcionando luminosidad y fortaleciendo la barrera cutánea.",
        image: productMetabolismPropolisSerum.url,
      },
      {
        name: "Hydra Radiance Essence Mist",
        format: "Tónico · Facial",
        ref: "00341",
        size: "100 ml",
        description:
          "Tiene propiedades reafirmantes, antienvejecimiento y despigmentantes. Ideal para llevar en el bolso. Se puede aplicar en cualquier momento del día y sobre el maquillaje.",
        image: productHydraRadianceMist.url,
      },
    ],
  },
  {
    slug: "limpieza",
    name: "Limpieza",
    description:
      "Limpiadores que preparan la piel y la mantienen en equilibrio antes y después de cualquier rutina.",
    products: [
      {
        name: "EGG BP Cell Expert Bubble Oil Soap",
        format: "Jabón limpiador · Facial y corporal",
        ref: "01122",
        size: "90 ml",
        description:
          "Jabón con doble acción limpiadora y nutritiva: remueve el maquillaje (incluso el resistente al agua) y las impurezas, manteniendo la piel hidratada, protegida y revitalizada gracias a sus excelentes propiedades antioxidantes y regenerativas. Se presenta en un envase de 90 ml dentro de un recipiente de 60 ml para poder ser rellenado.",
        image: productEggBubble.url,
      },
      {
        name: "Rose Water Cleansing Milk",
        format: "Leche limpiadora · Facial y corporal",
        ref: "UC008 / UC005",
        size: "2x 100 ml / 520 ml",
        description:
          "Leche limpiadora con agua y extracto de rosas. Limpieza e hidratación.",
        image: productRoseWaterMilk.url,
      },
    ],
  },
  {
    slug: "sets",
    name: "Rutinas y sets",
    description:
      "Rutinas completas pensadas para acompañar tu plan en clínica paso a paso en casa.",
    products: [
      {
        name: "Hydrate & Glow Skincare Set",
        format: "Tónico + Sérum + Crema · Facial",
        ref: "00226",
        size: "30 ml + 50 ml + 100 ml",
        description:
          "Set de productos con función principalmente hidratante. Reúne los tres pasos del skincare de la rutina coreana: tónico, sérum y crema. Su sinergia consigue una hidratación profunda y duradera. PVP 136 €.",
        image: productHydrateGlowSet.url,
      },
      {
        name: "Multi-Recovery Skincare Set",
        format: "Tónico + Sérum + Crema · Facial",
        ref: "00280",
        size: "30 ml + 50 ml + 60 ml",
        description:
          "Productos con función principalmente antiedad, reafirmantes y despigmentantes. Se encuentran los tres pasos del skincare de la rutina coreana: tónico, sérum y crema. PVP 195 €.",
        image: productMultiRecoverySet.url,
      },
      {
        name: "RESTACNE: Clear and Bright Skincare Set",
        format: "Limpiador + Tónico + Sérum + Crema · Facial",
        ref: "00010",
        size: "50 + 100 + 50 + 50 ml",
        description:
          "Rutina de skincare indicada para piel con tendencia acneica. Contiene un limpiador facial de la línea SAVIA, junto a un tónico, sérum y crema facial de la línea OVACO. PVP 199 €.",
        image: productRestacneSet.url,
      },
      {
        name: "RESISTENCE: Best Spot Treatment Set",
        format: "Limpiador + Tónico + Sérum + Crema · Facial",
        ref: "00478",
        size: "90 + 100 + 50 + 50 ml",
        description:
          "Descubre en este pack los básicos antimanchas y devuelve a tu piel su tono más luminoso y saludable. Contiene un limpiador facial de la línea SAVIA, un tónico, sérum y crema facial de la línea OVACO. PVP 215 €.",
        image: productResistenceSet.url,
      },
      {
        name: "EGG BP Cell Routine Set — Cofre",
        format: "Viales + Sérum + Crema · Facial",
        ref: "02058",
        size: "5x 7 ml + 1x 50 ml + 1x 50 ml",
        description:
          "Regenerante. La concentración de péptidos y factores de crecimiento es muy elevada, lo que le hace un producto potentísimo para tratar con la máxima eficacia pieles envejecidas y con diversas alteraciones: queratosis actínica crónica, psoriasis, dermatitis, eczemas, pieles atópicas, etc.",
        image: productEggRoutineSet.url,
      },
      {
        name: "REVERSE: Skin Rejuvenation Set",
        format: "Limpiador + Tónico + Sérum + Crema · Facial",
        ref: "00477",
        size: "50 + 100 + 50 + 30 ml",
        description:
          "Los cuatro productos del SET REVERSE rejuvenecen la piel, difuminando arrugas y devolviéndole su luminosidad natural. Este set contiene un limpiador facial de la línea SAVIA, un tónico, sérum y crema facial de la línea OVACO. PVP 219 €.",
        image: productReverseSet.url,
      },
      {
        name: "L'ENCLOS PDRN Peel and Repair Set",
        format: "Viales profesionales · Facial",
        ref: "00471",
        size: "6x 5 ml",
        description:
          "Set profesional de renovación y reparación celular con tecnología biotecnológica avanzada para pieles sensibles, apagadas y/o envejecidas.",
        image: productLenclosPdrn.url,
      },
      {
        name: "Dr Tufet Cellular Regeneration Program",
        format: "Aceite + Sérum + Sérum + Crema · Facial",
        ref: "01045",
        size: "Aceite 150 ml + Sérum E3P1 30 ml + Sérum FPG 30 ml + Crema PDRN 50 ml",
        description:
          "Pack de regeneración celular basado en el poder de las células madre del huevo reprogramadas (componente patentado por el Instituto de Ciencias Médicas de Corea e introducido por primera vez en el mundo en las líneas POOMI). Incluye EXOSOMAS provenientes de estas células (la fuente del auténtico exosoma), PDRN y CPN, MMN principalmente.",
        image: productDrTufetSet.url,
      },
    ],
  },
  {
    slug: "capilar",
    name: "Capilar",
    description:
      "Champús y tónicos para cuidar el cuero cabelludo y acompañar los tratamientos capilares en casa.",
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
      {
        name: "EGG Neural Cell Scalp Revitalizer",
        format: "Tónico capilar · Capilar",
        ref: "00232",
        size: "120 ml",
        description:
          "Revitaliza el cuero cabelludo, evitando la pérdida de cabello. Es un tónico para el cuero cabelludo que puede utilizarse todos los días. Reduce la temperatura del cuero cabelludo y regula la producción de sebo, lo que contribuye a detener la caída de pelo. Contiene Biotinoyl Tetrapéptido 5, que fortalece la raíz del pelo.",
        image: productEggScalpRevitalizer.url,
      },
    ],
  },
  {
    slug: "corporal",
    name: "Corporal",
    description:
      "Cremas y lociones para mantener el trabajo corporal entre sesiones.",
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
      "Fotoprotección de uso diario: el paso imprescindible para cuidar la piel y mantener cualquier tratamiento.",
    products: [
      {
        name: "Protector Solar Whitening Tone Up",
        format: "Crema con color · Facial",
        ref: "00126",
        size: "50 ml",
        description:
          "La mejor protección frente a los nocivos efectos del sol: filtros físicos, ingredientes reparadores y antiedad. Alto contenido en extracto de cactus y phytolipo, que calman y humectan hasta las pieles más sensibles.",
        image: productToneUpSolar.url,
      },
      {
        name: "Daily Moisturising Sunscreen",
        format: "Crema · Facial y corporal",
        ref: "OV066",
        size: "50 ml",
        description:
          "Emulsión fotoprotectora de última generación que combina los últimos avances con ingredientes hidratantes, calmantes y antiedad. Esta fórmula está protegida con UVA y UVB de amplio espectro, reforzar la barrera cutánea, y cuidar incluso las pieles más sensibles.",
        image: productDailySunscreen.url,
      },
    ],
  },
];

export const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "¿Necesito pedir cita previa?",
    answer:
      "Sí, trabajamos siempre con cita previa para poder dedicarte el tiempo y la atención que cada valoración merece.",
  },
  {
    question: "¿Puedo pedir información antes de reservar?",
    answer:
      "Por supuesto. Puedes escribirnos por WhatsApp o llamarnos y te orientamos sin compromiso antes de reservar.",
  },
  {
    question: "¿Los tratamientos son personalizados?",
    answer:
      "Sí. Antes de proponerte cualquier tratamiento hacemos una valoración con criterio sanitario para entender tu piel, tu cabello y lo que te gustaría mejorar. A partir de ahí diseñamos un plan adaptado a ti.",
  },
  {
    question: "¿Dónde está ubicado Hathor?",
    answer: `Estamos en ${CLINIC.address}, en el centro de Olesa de Montserrat.`,
  },
  {
    question: "¿Cómo puedo reservar cita?",
    answer:
      "Desde cualquier botón de la web te llevamos directamente a WhatsApp con un mensaje preparado. También puedes llamarnos al teléfono de la clínica.",
  },
  {
    question: "¿Qué tratamiento me recomendáis si no sé cuál elegir?",
    answer:
      "No te preocupes: lo habitual es no saberlo. Escríbenos por WhatsApp o reserva una valoración personalizada y te orientamos según lo que quieras mejorar.",
  },
];