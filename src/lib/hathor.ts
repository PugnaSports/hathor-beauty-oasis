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
    ],
  },
  {
    slug: "limpieza",
    name: "Limpieza",
    description:
      "Limpiadores faciales y corporales para preparar la piel y mantenerla equilibrada.",
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
      "Rutinas completas con limpiador, tónico, sérum y crema para resultados visibles y duraderos.",
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