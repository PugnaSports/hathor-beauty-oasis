Revisión integral de textos de Hathor Clínica para eliminar lenguaje de plantilla y reforzar la voz real: estética natural, criterio sanitario, cercanía y acompañamiento. No se toca diseño, estructura, rutas, datos de la clínica ni se añaden precios ni promesas médicas.

## Páginas a revisar y qué cambia en cada una

### 1. Home (`src/routes/index.tsx`)
- **Meta**: title y description más naturales, centrados en acompañamiento y criterio sanitario (no "tratamientos faciales, corporales y capilares con enfoque personalizado", que suena a lista).
- **Hero**:
  - Eyebrow: mantener ubicación y especialidades.
  - H1: mantener "Medicina estética y capilar en Olesa de Montserrat" (es real y útil para SEO).
  - Subhead: reescribir para no listar especialidades como folleto, sino para contar la filosofía (escucha, valoración, naturalidad).
  - Trust points (labels cortos): ajustar a tono: "Valoración personalizada", "Criterio sanitario", "Resultados naturales", "Tecnología avanzada".
- **Sección "Especialidades"**:
  - Eyebrow + H2 + párrafo: cambiar "Cuidado integral con enfoque médico" por algo más humano que hable de escuchar primero y diseñar el plan después.
  - 3 tarjetas: reescribir `desc` para que no repitan la frase del listado de tratamientos (diferenciar tono home vs. detalle).
- **Sección "Sobre Hathor" (teaser)**:
  - H2 + 2 párrafos: alinear con el bloque "Sobre nosotros" actualizado (voz de Laura, enfermería, acompañamiento). Evitar "espacio donde cuidar tu piel, tu cabello y tu confianza" tal cual si suena cliché; mantener tono cálido pero más concreto.
- **CTA final ("Reserva tu valoración")**: cambiar "Hablemos de lo que quieres mejorar" por una llamada más cercana ("Cuéntanos qué te gustaría mejorar y te proponemos un plan a tu medida"). Botones se mantienen.

### 2. Tratamientos índice (`src/routes/tratamientos.index.tsx`)
- **Meta**: description más natural, sin listar especialidades.
- **SectionHeader**: cambiar "Todos nuestros tratamientos" + descripción genérica por algo tipo: eyebrow "Tratamientos", título "Cuidamos tu piel y tu cabello con criterio sanitario", descripción que explique que todo parte de una valoración individual antes de proponer cualquier tratamiento.
- Tarjetas: reescribir cada `short` en `TREATMENTS` (ver §6) para que no repita la `description`.

### 3. Tratamiento detalle (`src/routes/tratamientos.$slug.tsx`)
- Eyebrow "Tratamiento" → mantener.
- CTA inferior: cambiar "¿Te interesa {nombre}?" + "Escríbenos por WhatsApp y reservamos una valoración personalizada para ti." por algo más cercano y honesto: "Cuéntanos qué te gustaría mejorar y te propondremos un plan adaptado a ti tras una valoración inicial."
- Encabezados de bloques: "Qué te aporta", "Para quién está indicado", "Qué puedes esperar" → mantener (ya son naturales); revisar el de "Tratamientos disponibles" para que diga "Lo que puede incluir tu plan" (más honesto: depende de la valoración).

### 4. Tratamientos — datos (`src/lib/hathor.ts`, array `TREATMENTS`)
Por cada uno de los 6 tratamientos, reescribir `short`, `description`, `benefits`, `indications` y `experience` con foco en:
- Naturalidad y resultados realistas (no "resultados visibles" repetido).
- Valoración previa siempre.
- Sin promesas (eliminar "resultados sostenibles", "mejora visible", reformular).
- `whatsappMessage`: mantener (ya son funcionales).
- `items`: mantener (son técnicas reales).

Concretamente, palabras a evitar y sustituir cuando aparezcan: "espectaculares", "increíbles", "premium", "los mejores", "transformación", "resultados visibles" (sustituir por "evolución progresiva", "cambios graduales y naturales").

### 5. Productos índice (`src/routes/productos.index.tsx`)
- **Meta**: ajustar.
- **Header**: cambiar "Asesoramiento experto, no venta agresiva" — el "no venta agresiva" suena defensivo. Sustituir por: eyebrow "Productos profesionales", título "Productos recomendados tras tu valoración", descripción que explique que solo recomendamos lo que realmente complementa tu plan en clínica.
- Nota final: mantener pero suavizar tono.

### 6. Productos por categoría (`src/routes/productos.$categoria.tsx`)
- CTA inferior: reescribir el cuadro final para que no repita la nota del índice y suene a invitación honesta ("¿Tienes dudas sobre tu rutina? Te orientamos en clínica tras una valoración personalizada").
- Botón secundario "Ver otras categorías": mantener.

### 7. Productos — descripciones de categoría (`src/lib/hathor.ts`, `PRODUCTS[].description`)
Reescribir las 6 descripciones de categoría (`facial`, `limpieza`, `sets`, `capilar`, `corporal`, `solar`) en una sola frase clara, sin frases tipo "packs y rutinas profesionales pensadas para…". Las descripciones de cada producto se mantienen (son fichas técnicas reales del fabricante; no se inventan datos).

### 8. Sobre nosotros (`src/routes/sobre-nosotros.tsx`)
- **Meta**: ajustar para reflejar enfermería + medicina capilar.
- **SectionHeader del hero**: el título actual "Donde la enfermería se une a la medicina estética y capilar" funciona; revisar la descripción para que no repita lo del texto de Laura.
- **Valores (3 tarjetas)**: revisar copys de "Cercanía / Profesionalidad / Personalización" para que no suenen a plantilla:
  - Cercanía: enfocar a escucha real antes de proponer.
  - Profesionalidad: criterio sanitario, formación continua, sin promesas.
  - Personalización: protocolo a medida según piel/cabello/momento vital.
- **Bloque Laura**: mantener el texto ya aprobado (es contenido real de la fundadora).
- **Banner inferior**: mantener.

### 9. Contacto (`src/routes/contacto.tsx`)
- SectionHeader: cambiar "Pide cita o visítanos en clínica" / "Estamos en el centro de Olesa de Montserrat. Llámanos, escríbenos por WhatsApp o ven a conocernos." por un texto más cercano que recuerde que atendemos con cita previa y ofrecemos valoración personalizada.

### 10. Footer (`src/components/hathor/SiteFooter.tsx`)
- Tagline bajo el logo: ajustar para reflejar tono cercano sin redundar con la home ("Medicina estética y capilar en Olesa de Montserrat. Acompañamos cada caso desde la escucha, el criterio sanitario y la cercanía.").
- Resto (navegación, contacto, legal): sin cambios.

### 11. Instagram (`src/routes/instagram.tsx`)
- SectionHeader description: cambiar "Te enseñamos tratamientos, tecnología y el día a día de la clínica" por algo menos plantilla ("Te enseñamos cómo trabajamos, novedades de la clínica y consejos reales sobre piel y cabello").

### 12. FAQ (`src/lib/hathor.ts`, `FAQ_ITEMS`)
- Repasar las 6 preguntas/respuestas para asegurar tono cercano. Mantener las útiles, reformular la 3 ("¿Los tratamientos son personalizados?") para que la respuesta no parezca obvia: explicar que siempre hay valoración previa con criterio sanitario.

### 13. Header / CTA móvil / navegación
- Sin cambios estructurales. Mantener labels de NAV_LINKS y el botón "Pedir cita".

## Lo que NO se toca
- Diseño, paleta, tipografías, layout, espaciados, componentes UI.
- Rutas, navegación, dropdowns, estructura multipágina.
- Datos reales: dirección, teléfono, email, horarios, Instagram, fichas técnicas de producto.
- Slugs, imágenes, assets.
- No se añaden precios; los PVP que aparecen actualmente en algunas descripciones de sets vienen del fabricante y los mantenemos tal cual (no son invención nuestra). Si prefieres que también los retire, dímelo y los quito en una pasada extra.

## Detalle técnico (para implementación)
- Cambios localizados en: `src/lib/hathor.ts` (TREATMENTS shorts/descriptions/benefits/indications/experience, PRODUCTS[].description, FAQ_ITEMS), `src/routes/index.tsx`, `src/routes/tratamientos.index.tsx`, `src/routes/tratamientos.$slug.tsx`, `src/routes/productos.index.tsx`, `src/routes/productos.$categoria.tsx`, `src/routes/sobre-nosotros.tsx`, `src/routes/contacto.tsx`, `src/routes/instagram.tsx`, `src/components/hathor/SiteFooter.tsx`.
- Sin cambios en tipos, props, rutas ni componentes.
- Revisión final visual en móvil y escritorio para asegurar que los nuevos textos no rompen layout (longitudes similares a las actuales).
