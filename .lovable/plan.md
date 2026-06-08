## Objetivo

Renombrar “Servicios” por “Tratamientos”, crear una página individual por tratamiento y personalizar el mensaje de WhatsApp en cada uno, manteniendo la estética premium actual.

## Decisiones por defecto (puedes corregirme)

- **Tratamientos**: uso las 6 categorías actuales como tratamientos individuales:
  1. Medicina estética facial
  2. Tratamientos corporales
  3. Láser
  4. Medicina capilar
  5. Aparatología avanzada (Prysm iO)
  6. Asesoramiento personalizado
- **Destacados en home**: los 3 actuales — Medicina estética facial, Medicina capilar, Tratamientos corporales.
- **URL antigua**: `/servicios` se mantiene como redirección a `/tratamientos` (preserva enlaces y SEO).

## Cambios

### 1. Renombrado global Servicios → Tratamientos
- `src/lib/hathor.ts`: en `NAV_LINKS`, cambiar `{ to: "/servicios", label: "Servicios" }` por `{ to: "/tratamientos", label: "Tratamientos" }`.
- Añadir en `CLINIC` un array `TREATMENTS` (ver más abajo) con slug, nombre, descripción corta, descripción larga, beneficios, indicaciones, qué esperar, imagen y mensaje de WhatsApp.
- Reemplazar textos visibles “Servicios” → “Tratamientos”, “Ver servicios” → “Ver tratamientos” en home, footer, CTAs y headers de sección.

### 2. Rutas
- **Crear** `src/routes/tratamientos.tsx`: layout con `<Outlet />` para anidar el detalle.
- **Crear** `src/routes/tratamientos.index.tsx`: listado completo (adaptado del `servicios.tsx` actual; bloque Prysm iO se mueve al detalle de Aparatología).
- **Crear** `src/routes/tratamientos.$slug.tsx`: página individual por tratamiento.
- **Reemplazar** `src/routes/servicios.tsx` por un redirect a `/tratamientos` (usando `beforeLoad` + `redirect()` de TanStack Router).
- Actualizar todos los `<Link to="/servicios">` (home, footer, CTAs internos) a `to="/tratamientos"`.

### 3. Página individual `/tratamientos/$slug`
Cada página incluye:
- Hero con imagen + nombre del tratamiento (h1) + descripción corta.
- Sección “Descripción”.
- Sección “Beneficios” (lista con bullets dorados).
- Sección “Para quién está indicado”.
- Sección “Cómo se realiza / qué esperar”.
- CTA final: botón principal “Reservar por WhatsApp” (mensaje personalizado) + botón secundario “Llamar”.
- Link de retorno “← Ver todos los tratamientos”.
- `head()` con title/description/OG propios y `og:image` con la imagen del tratamiento.
- 404 (`notFoundComponent`) si el slug no existe.

### 4. WhatsApp personalizado
Helper `whatsappUrlFor(message)` en `src/lib/hathor.ts` que devuelve `https://wa.me/34655558606?text=<encoded>`.

Mensajes por tratamiento (formato “Hola! Me gustaría pedir cita para …”):
- Medicina estética facial → “…para medicina estética facial.”
- Tratamientos corporales → “…para un tratamiento corporal.”
- Láser → “…para un tratamiento láser.”
- Medicina capilar → “…para un tratamiento capilar.”
- Aparatología avanzada → “…para una valoración con aparatología avanzada.”
- Asesoramiento personalizado → “…para un asesoramiento personalizado.”

El `CLINIC.whatsapp` general (header, footer, mobile bar, contacto, CTAs no específicos) sigue con el mensaje genérico actual (“Hola Hathor, me gustaría pedir cita para una valoración.”). Solo los CTAs dentro de la ficha de tratamiento usan el mensaje específico.

### 5. Home
- Mantener la sección actual de 3 tratamientos destacados.
- Cambiar los `<Link to="/servicios">` por `<Link to="/tratamientos">` y, en las tarjetas, enlazar a `/tratamientos/$slug` correspondiente.
- Botón “Ver todos” → `/tratamientos`.

### 6. Diseño
- Reutilizar tipografía, paleta, `SectionHeader`, `CTALink`/`CTAAnchor` y patrón de imágenes en aspect-ratio 4/5.
- Sin librerías nuevas. Sin recargar la UI.
- Mantener el bloque Prysm iO existente, ahora dentro del detalle “Aparatología avanzada”.

## Detalle técnico

- Estructura del item en `TREATMENTS`:
  ```ts
  { slug, name, short, image, description, benefits: string[],
    indications: string[], experience: string[], whatsappMessage }
  ```
- Slugs: `medicina-estetica-facial`, `tratamientos-corporales`, `laser`, `medicina-capilar`, `aparatologia-avanzada`, `asesoramiento-personalizado`.
- Redirect de `/servicios`:
  ```ts
  createFileRoute("/servicios")({
    beforeLoad: () => { throw redirect({ to: "/tratamientos" }) },
  })
  ```
- Imágenes: se reutilizan las existentes en `src/assets/hathor-*.jpg`.

## Fuera de alcance

- No se cambia el número de teléfono ni el resto de contenido legal/contacto.
- No se cambian Instagram, Maps, ni los CTAs genéricos de WhatsApp del header/footer/mobile bar.
