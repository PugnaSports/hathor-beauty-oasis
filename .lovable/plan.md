## Objetivo
Añadir una sección de Preguntas Frecuentes (FAQ) en formato acordeón en la home y en la página de Tratamientos, manteniendo la estética premium y limpia de Hathor.

## Cambios

### 1. Datos
Añadir array `FAQ_ITEMS` en `src/lib/hathor.ts` con las 6 preguntas/respuestas propuestas, usando la dirección real del centro (`CLINIC.address`).

### 2. Componente reutilizable
Crear `src/components/hathor/FaqSection.tsx`:
- Usar el `Accordion` de Radix ya existente (`src/components/ui/accordion.tsx`).
- Estilo Hathor: bordes sutiles (`border-b`), tipografía `font-display` en la pregunta, `font-body` en la respuesta, color dorado en el ícono de apertura, padding generoso.
- Fondo transparente o nude muy suave (`bg-nude/20`).
- Máximo ancho contenido (`max-w-3xl` centrado) para no recargar.
- Header con `SectionHeader` (eyebrow "FAQ", title "Preguntas frecuentes").
- Responsive sin cambios de layout complejos.

### 3. Inserción en páginas
- **Home (`src/routes/index.tsx`)**: insertar `<FaqSection />` después de la sección "Sobre nosotros" y antes del CTA final.
- **Tratamientos (`src/routes/tratamientos.index.tsx`)**: insertar `<FaqSection />` después del grid de tarjetas de tratamientos.

### 4. Diseño
- No nuevas librerías.
- No nuevas imágenes.
- Sin modificar el resto de contenido, estilo ni metadatos.
- Tono cercano, profesional y elegente en los textos (ya definidos por el usuario).