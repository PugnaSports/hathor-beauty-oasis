# Unificar enlaces de WhatsApp con mensaje predefinido

## Objetivo
Que todos los enlaces de WhatsApp en la web abran la misma conversación con el mensaje:
"Hola Hathor, me gustaría pedir cita para una valoración."

## Enfoque
La constante `CLINIC.whatsapp` en `src/lib/hathor.ts` ya se usa en todos los puntos de la web (header, footer, mobile bar, CTAs de home/servicios/contacto, etc.). Basta con actualizar ese único valor para que el cambio se propague.

## Cambio único

**Archivo: `src/lib/hathor.ts`**

Reemplazar:
```ts
whatsapp: "https://wa.me/34655558606",
```

Por:
```ts
whatsapp: "https://wa.me/34655558606?text=Hola%20Hathor%2C%20me%20gustar%C3%ADa%20pedir%20cita%20para%20una%20valoraci%C3%B3n.",
```

Mismo número (`34655558606`), añadido `?text=` con el mensaje URL-encoded (tildes, coma y espacios codificados correctamente: `%C3%ADa`, `%2C`, `%20`).

## Verificación
1. Buscar en el repo cualquier `wa.me`, `whatsapp.com` o `api.whatsapp.com` hardcodeado fuera de `CLINIC.whatsapp`. Si aparece alguno (no debería), reemplazarlo por `CLINIC.whatsapp`.
2. Confirmar que todos los puntos de uso ya tienen `target="_blank"` y `rel="noopener noreferrer"` (vía `ExternalLink`, `CTAAnchor` con detección externa, o atributos explícitos). El `MobileCTABar`, `SiteFooter`, hero, página de contacto y CTAs del home ya lo cumplen mediante los componentes existentes.
3. Abrir el preview y comprobar que al pulsar cualquier botón de WhatsApp se abre la conversación con el texto precargado.

## Fuera de alcance
- Diseño, copys de botones, número de teléfono.
- Cambios en otros enlaces (Instagram, Maps, email, tel).
