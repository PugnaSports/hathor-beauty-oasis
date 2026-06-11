## Objetivo
Integrar la información real de Hathor (servicios, sub-tratamientos, productos, historia de Laura) dentro de la web actual, manteniendo el diseño, la estructura multipágina y la estética premium ya construidos. Sin rehacer páginas ni cambiar la marca visual.

## Alcance (lo que SÍ se hace ahora)
Punto 4 del listado. No se aborda SEO profundo, revisión móvil final ni revisión legal final.

## Cambios

### 1. `src/lib/hathor.ts` — fuente única de datos
- Añadir a cada `Treatment` un campo opcional `items: string[]` con los sub-tratamientos reales:
  - **Medicina estética facial**: Hollywood peel · Biorregeneración facial · Células madre · Células madre premium · Exosomas · Peeling químico suave · Tratamiento de ojeras.
  - **Medicina capilar**: Láser capilar · Vitaminas capilares · Seguimiento/valoración especializada.
  - **Láser**: Láser corporal indoloro · Eliminación de tatuajes.
  - **Tratamientos corporales**: Eliminación de celulitis · Reafirmación corporal.
  - **Aparatología avanzada**: Diagnóstico y seguimiento · Personalización de protocolos · Tecnología de apoyo (Prysm iO mencionado con tono sobrio, sin claims).
  - **Asesoramiento personalizado**: Valoración previa · Rutina recomendada · Acompañamiento · Plan adaptado.
- Añadir `PRODUCTS` agrupado por 4 categorías con los productos reales del correo:
  - Facial: Pack antiacné · Pack antimanchas · Pack células madre · Pack Dr. Tufet.
  - Capilar: Champú anticaída · Tónico capilar.
  - Corporal: Crema corporal anticelulítica · Crema corporal reafirmante.
  - Solar: Protector solar SPF 50 pieles sensibles · Crema con color con protector solar.
  - Cada producto: `name`, `category`, `description` corta y profesional (sin precios, sin claims).

### 2. Logo real
- No hay archivo de logo real en `src/assets/`. Mantener el wordmark tipográfico "Hathor" actual en `SiteHeader` y `SiteFooter` (ya coherente con la marca).
- Dejar preparado un único punto de sustitución: si más adelante se sube el logo real (`hathor-logo.svg` o `.png` vía `lovable-assets`), se reemplaza el wordmark por `<img>` en esos dos componentes. No se introducen placeholders rotos.

### 3. `src/routes/tratamientos.$slug.tsx`
- Añadir bloque "Qué incluye" cuando el tratamiento tenga `items`: lista limpia con bullets/iconos sutiles, mismo estilo que las secciones de beneficios.
- No tocar layout ni hero existentes.

### 4. `src/routes/tratamientos.index.tsx`
- Bajo cada card, mostrar los 2–4 primeros `items` como chips/línea discreta (tipografía pequeña, separadores `·`) para reflejar contenido real sin recargar el grid.

### 5. `src/routes/productos.tsx`
- Reemplazar el grid de 4 "categorías genéricas" actual por las 4 categorías reales con sus productos listados.
- Mantener exactamente la estructura visual: hero a la izquierda + imagen a la derecha, y bajo el hero un grid de tarjetas por categoría. Cada tarjeta lista sus productos con `name` + descripción breve, sin precios y sin imágenes individuales (cards limpias listas para añadir imagen luego).
- Mantener el CTA "Solicita asesoramiento" → `/contacto`.

### 6. `src/routes/sobre-nosotros.tsx`
- Añadir un bloque sobre Laura (fundadora y enfermera) entre la sección de valores y el banner final. Texto cercano, profesional y clínico; sin promesas médicas exageradas. Reutiliza `sobreImg` como imagen secundaria o queda como bloque a dos columnas (texto + imagen ya existente, reorganizando sin nuevos assets).
- Ajustar la descripción introductoria para reflejar la unión enfermería + medicina estética/capilar.

### 7. `src/routes/index.tsx`
- Mantener el bloque destacado existente. Ajustar el subtítulo/teaser de la sección "Especialidades" para hacer mención breve a las 4 áreas reales (faciales, capilares, corporales, aparatología avanzada) sin rehacer la home.
- No tocar hero, CTAs ni FAQ.

### 8. CTAs y WhatsApp
- Mantener "Pedir cita", "Ver tratamientos", "Contactar".
- El `whatsapp` global de `CLINIC` ya usa el mensaje exacto: *"Hola Hathor, me gustaría pedir cita para una valoración."* ✅ No se modifica.
- Los mensajes específicos por tratamiento (`whatsappMessage`) ya existen y se mantienen.

## Lo que NO se toca
- Estructura de rutas, navegación, header, footer, FAQ, legales, cookies.
- Estética: tipografías, colores nude/gold/ink, layout boutique editorial.
- Imágenes existentes (se reutilizan; no se generan nuevas).
- SEO profundo, responsive final, textos legales.

## Archivos a editar
- `src/lib/hathor.ts` (datos: items por tratamiento + `PRODUCTS`)
- `src/routes/tratamientos.$slug.tsx` (bloque "Qué incluye")
- `src/routes/tratamientos.index.tsx` (chips de items en cards)
- `src/routes/productos.tsx` (4 categorías reales con productos)
- `src/routes/sobre-nosotros.tsx` (bloque Laura)
- `src/routes/index.tsx` (microajuste de copy en "Especialidades")
