# Integrar 10 productos nuevos al catálogo

Mismo flujo que con la tanda anterior: recorte automático del producto sobre fondo blanco, cuadrado 600×600, contenedor `aspect-square` uniforme.

## Mapeo de imágenes

| # | Imagen | Producto | Categoría |
|---|---|---|---|
| 25 | `image-25` | **L'ENCLOS PDRN Peel and Repair Set** · Viales profesionales · Ref 00471 · 6×5 ml | Sets |
| 26 | `image-26` | **Protector Solar Whitening Tone Up** · Crema facial · Ref 00126 · 50 ml | Solar |
| 27 | `image-27` | **Dr Tufet Cellular Regeneration Program** · Aceite limpiador 150 ml + Serum E3P1 30 ml + Serum FPG 30 ml + Crema PDRN 50 ml · Ref 01045 | Sets |
| 28 | `image-28` | **Daily Moisturising Sunscreen** · Crema facial/corporal · Ref OV066 · 50 ml | Solar |
| 29 | `image-29` | **RESISTENCE: Best Spot Treatment Set** — *ya existe*, actualizar con PVP 215 € e imagen mejorada | Sets (update) |
| 30 | `image-30` | **RESTACNE: Clear and Bright Skincare Set** — *ya existe*, actualizar con PVP 199 € e imagen mejorada | Sets (update) |
| 31 | `image-31` | **REVERSE: Skin Rejuvenation Set** · Limpiador + Tónico + Sérum + Crema · Ref 00477 · 50 + 100 + 50 + 30 ml · PVP 219 € | Sets |
| 32 | `image-32` | **Double Intensify Effect Core Sérum** · Sérum facial · Ref 00331 · 50 ml | Facial |
| 33 | `image-33` | **Egg BP Cell Sérum** · Sérum facial · Ref 00910 | Facial |
| 34 | `image-34` | **Superb Amazing Result Core Sérum** · Sérum facial · Ref 00328 · 50 ml | Facial |

Además: la categoría **Solar** sustituye los dos placeholders genéricos por los productos reales 26 y 28.

## Pasos técnicos

1. **Procesar imágenes 25-34** con el mismo script (detección por color + saturación, recorte al bbox del producto, padding 14%, cuadrado 600×600 sobre fondo blanco). Para casos problemáticos (texto dorado dominante, productos muy claros), override manual del bbox.
2. **Subir** cada imagen al CDN como `product-<slug>.png.asset.json`.
3. **`src/lib/hathor.ts`**: añadir imports + entradas nuevas en las categorías correspondientes, actualizar las dos existentes (RESISTENCE 215 € + RESTACNE 199 €) y reemplazar los 2 placeholders de Solar.
4. **Sin cambios** en estilos, layout, ni en el resto de productos.

## Resultado esperado

Catálogo ampliado con 8 productos nuevos + 2 actualizados, todos con el mismo aspecto visual uniforme que la tanda anterior.
