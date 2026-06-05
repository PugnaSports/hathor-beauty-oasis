export const CLINIC = {
  name: "Hathor",
  fullName: "Hathor Clínica de Medicina Estética y Capilar",
  address: "Carrer Anselm Clavé 144, Olesa de Montserrat",
  phoneDisplay: "655 55 86 06",
  phoneTel: "+34655558606",
  whatsapp: "https://wa.me/34655558606",
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
  { to: "/servicios", label: "Servicios" },
  { to: "/productos", label: "Productos" },
  { to: "/sobre-nosotros", label: "Sobre nosotros" },
  { to: "/instagram", label: "Instagram" },
  { to: "/contacto", label: "Contacto" },
] as const;