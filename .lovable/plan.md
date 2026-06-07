## Objetivo

Añadir tres páginas legales (`/aviso-legal`, `/politica-privacidad`, `/politica-cookies`) con diseño coherente con la web de Hathor, y enlazarlas desde el footer en una zona legal discreta.

## Páginas nuevas

Estructura común (componente reutilizable o JSX directo dentro de cada ruta):

- Hero sobrio: eyebrow ("Legal"), `<h1>` con el título, fecha de última actualización.
- Contenedor de lectura estrecho: `max-w-3xl mx-auto px-6 py-20` para confort de lectura.
- Índice navegable arriba con anclas (`#titularidad`, `#objeto`, etc.) para escanear rápido.
- Secciones con `<h2>` (font-display) + cuerpo en `text-ink-muted leading-relaxed`.
- Bloque final "¿Dudas?" con enlace a `/contacto` y al email.

Cada ruta usará `createFileRoute` + `head()` propio con `title`, `description`, `og:title`, `og:description` específicos (sin `og:image`, son páginas legales).

### `/aviso-legal` — `src/routes/aviso-legal.tsx`
Secciones: Titularidad del sitio · Objeto de la web · Condiciones de uso · Propiedad intelectual e industrial · Responsabilidades · Enlaces externos · Legislación aplicable y jurisdicción · Contacto.
Placeholders visibles: `[RAZÓN SOCIAL]`, `[NIF/CIF]`, `[DIRECCIÓN FISCAL]`, `[EMAIL DE CONTACTO]` (usa `info@clinicahathor.es` cuando ya lo conocemos), `[DOMINIO WEB]`.

### `/politica-privacidad` — `src/routes/politica-privacidad.tsx`
Secciones: Responsable del tratamiento · Datos que recogemos (formulario de contacto, email, teléfono/WhatsApp) · Finalidades · Base legal (consentimiento, interés legítimo, ejecución de relación) · Plazos de conservación · Destinatarios y encargados (`[EMPRESA DE HOSTING]`, proveedor de email, Meta/WhatsApp si se contacta por ahí) · Transferencias internacionales · Derechos del usuario (acceso, rectificación, supresión, oposición, limitación, portabilidad, reclamación AEPD) · Seguridad · Menores de edad · Cómo ejercer derechos (email + dirección postal).
Refleja explícitamente que la web enlaza a WhatsApp, teléfono, email, Google Maps e Instagram, y que al usar esos canales aplican también las políticas del tercero.

### `/politica-cookies` — `src/routes/politica-cookies.tsx`
Secciones: Qué son las cookies · Tipos (técnicas, preferencias, analíticas, marketing) · Cookies utilizadas en este sitio (tabla simple) — declaramos que actualmente solo se usan cookies técnicas estrictamente necesarias · Servicios de terceros que pueden instalar cookies si el usuario interactúa con ellos: Google Maps (mapa embebido), Instagram (enlaces y posibles embeds de reels), enlaces a WhatsApp · Cómo configurar o rechazar cookies en los principales navegadores (Chrome, Firefox, Safari, Edge) con enlaces oficiales · Cambios en la política · Contacto.
Nota visible: "Actualmente este sitio no instala cookies no técnicas que requieran consentimiento previo. Si en el futuro se incorporan analíticas o marketing, se mostrará un banner de consentimiento". No se añade banner ahora.

## Footer

Editar `src/components/hathor/SiteFooter.tsx`:

- Añadir, debajo de la línea de copyright actual, una fila legal discreta con tipografía pequeña (`text-xs text-ink-muted`) y enlaces separados por `·`:
  - `Aviso legal` → `/aviso-legal`
  - `Política de privacidad` → `/politica-privacidad`
  - `Política de cookies` → `/politica-cookies`
- Ajustar el copyright a: `© {año} Hathor Clínica. Todos los derechos reservados.`

Los `Link` usan `@tanstack/react-router` para mantener navegación SPA y consistencia con el resto del footer.

## Detalles técnicos

- Rutas planas en `src/routes/`: `aviso-legal.tsx`, `politica-privacidad.tsx`, `politica-cookies.tsx`. El plugin de TanStack regenera `routeTree.gen.ts` automáticamente.
- Cada `createFileRoute("/aviso-legal")` etc. con `component` que renderiza un layout `<article>` reutilizando estilos existentes (`text-ink`, `text-ink-muted`, `text-gold`, `font-display`, `bg-nude/40` para bandas suaves si hace falta).
- Sin librerías nuevas. Sin componentes nuevos obligatorios, aunque puede extraerse un pequeño `<LegalPage>` wrapper si reduce duplicación; lo dejo a criterio durante la implementación.
- Sin cambios en el header.

## Lo que NO se hace

- No se añade banner de cookies (no hay cookies no técnicas activas).
- No se inventan datos legales: razón social, NIF, dirección fiscal y hosting quedan como placeholders.
- No se tocan otras páginas ni el diseño global.
