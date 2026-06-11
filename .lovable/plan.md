## 1. Desplegables en el header (Tratamientos y Productos)

En `SiteHeader.tsx`, los items "Tratamientos" y "Productos" del menú principal se transforman en items con dropdown:

- Click directo en el label → navega a la página índice actual (`/tratamientos` o `/productos`), igual que ahora.
- Hover (desktop) / tap en el chevron (móvil) → abre un panel desplegable bajo el header con la lista de:
  - **Tratamientos**: todos los tratamientos de `TREATMENTS` (enlace a `/tratamientos/$slug`).
  - **Productos**: las 6 categorías de `PRODUCTS` (enlace a `/productos/$categoria`, nueva ruta — ver punto 2).
- En móvil, dentro del drawer existente, cada uno se vuelve acordeón expandible.

Detalles visuales: panel full-width bajo el header con fondo `bg-background/95 backdrop-blur`, lista en columnas (2-3 cols), tipografía `font-display` para el nombre + `text-ink-muted` para descripción corta. Cierra al hacer click fuera, al cambiar de ruta, o al pulsar Esc.

## 2. Productos por categoría con su propia página

Estructura nueva:

- `src/routes/productos.tsx` (índice `/productos`): se rediseña para mostrar **bloques de categoría** al estilo de la rejilla de tratamientos (imagen + nombre + descripción + "Ver productos"), no la lista actual con todos los productos juntos. Cada bloque enlaza a su página de categoría.
- `src/routes/productos.$categoria.tsx` (nueva ruta `/productos/$categoria`): lista los productos de esa categoría con un layout más ordenado (grid de tarjetas en lugar del listado vertical denso actual), breadcrumb "Productos / [Categoría]", título de categoría, descripción, y CTA a contacto al final.

Imagen de cabecera por categoría: usamos la primera imagen de producto de la categoría como portada (no añadimos assets nuevos).

`head()` propio por categoría (title, description, og:title, og:description).

## 3. Sobre nosotros — texto de Laura en primera persona

En `src/routes/sobre-nosotros.tsx`, sección "Laura · Fundadora":

- Mantener eyebrow y la foto.
- Reemplazar el título por algo en primera persona, por ejemplo: *"Te doy la bienvenida a Hathor"*.
- Sustituir los dos párrafos actuales por el texto exacto proporcionado, dividido en sus párrafos naturales (5 párrafos, manteniendo la jerarquía tipográfica actual `text-ink-muted leading-relaxed`).

## 4. Detalles técnicos

- Nuevo componente `NavDropdownItem` reutilizable en `src/components/hathor/` para el item del header con panel.
- Tipo `ProductCategory` ya tiene `slug` tipado (`"facial" | "capilar" | ...`). En la nueva ruta `/productos/$categoria` se valida el slug contra `PRODUCTS`; si no existe → `throw notFound()`.
- `routeTree.gen.ts` se autogenera; solo añadimos el archivo de la nueva ruta.
- No se tocan los datos de `PRODUCTS` ni `TREATMENTS` salvo añadir, si es necesario, una `image` opcional de cabecera por categoría (en una iteración futura — por ahora reutilizamos imágenes existentes).
- No se cambia el flujo de "Pedir cita" ni el footer.

## Archivos afectados

- `src/components/hathor/SiteHeader.tsx` — añadir dropdowns.
- `src/components/hathor/NavDropdownItem.tsx` — nuevo.
- `src/routes/productos.tsx` — rediseño a rejilla de categorías.
- `src/routes/productos.$categoria.tsx` — nuevo.
- `src/routes/sobre-nosotros.tsx` — texto de Laura.
- `src/lib/hathor.ts` — opcional: helper `getProductCategoryBySlug`.
