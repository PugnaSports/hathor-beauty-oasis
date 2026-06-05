## Resumen

Web multi-página para **Hathor Clínica de Medicina Estética y Capilar** con rutas separadas por sección (mejor SEO, URLs compartibles, metadatos propios). Dirección visual: **Boutique Editorial** — paleta nude/beige + dorado sutil, Playfair Display + Inter, composiciones asimétricas y animaciones sutiles al scroll.

## Estructura de rutas

```
src/routes/
  __root.tsx          → layout global (header + footer + CTAs móviles flotantes)
  index.tsx           → / (Inicio: hero, resumen de servicios, sobre breve, CTA contacto)
  servicios.tsx       → /servicios (los 6 servicios + bloque de aparatología/Prysm iO)
  productos.tsx       → /productos (productos profesionales por categoría)
  sobre-nosotros.tsx  → /sobre-nosotros (historia, filosofía, equipo)
  instagram.tsx       → /instagram (perfil + 3 reels enlazados)
  contacto.tsx        → /contacto (datos, horario, mapa Google Maps embebido)
```

Cada ruta tendrá su propio `head()` en español con title, description, og:title, og:description únicos.

## Header / Footer globales (en __root.tsx)

- **Header fijo** con blur: logo Hathor + menú (Inicio · Servicios · Productos · Sobre nosotros · Instagram · Contacto) + botón "Pedir cita" que enlaza a `/contacto`
- **Footer** en todas las páginas: datos de contacto, Instagram, enlaces rápidos, disclaimer legal
- **Barra inferior flotante en móvil** con accesos rápidos: Llamar · WhatsApp · Cómo llegar

## Contenido por página

**/** — Hero ("Medicina estética y capilar en Olesa de Montserrat" + subtítulo + CTAs Pedir cita / Ver servicios), puntos de confianza, preview de servicios (6 tarjetas que enlazan a `/servicios`), bloque sobre nosotros breve con enlace, CTA final hacia `/contacto`

**/servicios** — Intro + grid asimétrico de los 6 servicios (Medicina estética facial, Tratamientos corporales, Láser, Medicina capilar, Aparatología avanzada, Asesoramiento personalizado), seguido del bloque destacado de tecnología con mención a **Prysm iO**

**/productos** — Sección "Productos profesionales": 4 categorías (Facial, Capilar, Corporal, Solar) con enfoque de asesoramiento experto, no venta agresiva

**/sobre-nosotros** — Texto cercano + imagen de equipo/clínica + valores

**/instagram** — Enlace al perfil `@hathor_clinica` + 3 tarjetas con thumbnail que enlazan a los reels específicos (DXj23XVje6o, DW6siZDDWxD, DWUbyAbjW1G). Sin embed oficial de IG (rompe SSR/edge); tarjetas elegantes con `target="_blank"`

**/contacto** — Teléfono, email, dirección, horario completo, botones "Llamar ahora" (`tel:`), "WhatsApp" (`wa.me/34655558606`), "Cómo llegar" (Google Maps), iframe de Google Maps embebido con la dirección

## Datos verificados (del brief)

- Carrer Anselm Clavé 144, Olesa de Montserrat
- 655 55 86 06 — info@clinicahathor.es
- Horario: L 15-19 · Ma-J 10-13 / 15-19 · V 10-13 / 15-18
- Instagram: hathor_clinica
- Eliminado cualquier rastro de "Quincy, MA 02169"

## Detalles técnicos

- Componentes reutilizables en `src/components/hathor/` (Header, Footer, MobileCTABar, ServiceCard, ContactInfo, etc.)
- Tokens nude/beige/dorado en oklch en `src/styles.css`
- Playfair Display + Inter via Google Fonts en el head del root
- Imágenes generadas con `imagegen` (fast tier) para hero, sobre nosotros, servicios, productos en `src/assets/`
- Animaciones suaves en CSS + `IntersectionObserver` (sin librerías extra)
- Mapa: iframe público de Google Maps Embed (sin API key)
- Sin backend, sin Lovable Cloud
- Responsive mobile-first, lang="es"

## Lo que NO haré

- No invento tratamientos médicos concretos, marcas, ni precios fuera del brief
- No añado formulario de contacto con envío (sin backend); todo va a `tel:`, `wa.me`, `mailto:` y mapa
- No uso embed oficial de Instagram (requiere script externo); tarjetas-enlace en su lugar
