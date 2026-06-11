## Fix 1 — Alinear los bloques de categorías

En `src/routes/productos.tsx` (la rejilla de categorías), quitar el desplazamiento alterno `md:translate-y-10` aplicado a los items impares. Resultado: las 3 tarjetas por fila quedan alineadas a la misma altura, igual que el resto de grids del sitio.

## Fix 2 — Las páginas de categoría no abren

Causa: con `productos.tsx` + `productos.$categoria.tsx` conviviendo, TanStack trata `productos.tsx` como **layout padre**. Para que la subruta `/productos/$categoria` se muestre, el padre tendría que renderizar `<Outlet />`, pero ahora mismo renderiza la rejilla de categorías. Por eso al hacer click no aparece la página de detalle.

Solución: renombrar `src/routes/productos.tsx` → `src/routes/productos.index.tsx` y actualizar dentro `createFileRoute("/productos")` → `createFileRoute("/productos/")`. Así:

- `/productos` (index) → rejilla de categorías.
- `/productos/$categoria` → página de la categoría (ya existe).

No hace falta crear un layout intermedio porque no hay UI compartida entre ambas.

## Archivos afectados

- `src/routes/productos.tsx` → renombrar a `src/routes/productos.index.tsx`, ajustar `createFileRoute` y quitar la clase `md:translate-y-10`.
- `src/routeTree.gen.ts` se regenera solo.

Nada más cambia (header, datos, otras páginas siguen igual).
