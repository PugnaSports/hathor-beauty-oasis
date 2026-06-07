# Corregir enlaces en /politica-cookies

## Problema
En la página actual, las listas de "Servicios de terceros" y "Cómo configurar o rechazar cookies" mezclan texto narrativo, comas, espacios `{" "}` y enlaces multilínea dentro del mismo `<li>`. Eso, combinado con el wrap responsive y los estilos heredados del contenedor `[&_a]:underline` de `LegalPage`, hace que el área clicable de un enlace solape visualmente con la del siguiente y que algunos textos parezcan enlaces sin serlo. Además varios `href` no son los definitivos pedidos.

## Cambios (solo `src/routes/politica-cookies.tsx`)

1. **Sección "Servicios de terceros"** — convertir cada item en un `<li>` con estructura simple:
   - Un `<strong>` con el nombre del servicio y su descripción corta como texto plano.
   - Un único `<a>` aislado en su propia línea (precedido por algo tipo "Más información:") con el enlace oficial. Sin envolver texto adyacente, sin enlaces dentro de enlaces.
   - Hrefs actualizados:
     - Google / Google Maps → `https://policies.google.com/privacy?hl=es`
     - Instagram / Meta → `https://privacycenter.instagram.com/policy/`
     - WhatsApp → `https://www.whatsapp.com/legal/privacy-policy-eea?lang=es_ES`

2. **Sección "Cómo configurar o rechazar cookies"** — cada `<li>` contendrá **solo** un `<a>` con el nombre del navegador como único contenido clicable. Sin texto suelto antes ni después dentro del mismo `<li>`. Hrefs actualizados:
   - Chrome → `https://support.google.com/accounts/answer/61416?hl=es`
   - Firefox → `https://support.mozilla.org/es/kb/Borrar%20cookies`
   - Safari → `https://support.apple.com/es-es/guide/safari/sfri11471/mac`
   - Edge → `https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-ver-permitir-bloquear-eliminar-y-usar-168dab11-0753-043d-7c16-ede5947fc64d`

3. **Atributos uniformes en todos los enlaces externos**: `target="_blank"` + `rel="noopener noreferrer"`. Cada `<a>` se escribe en una sola línea JSX para evitar nodos de texto con espacios colgantes que extiendan el área clicable.

4. **Sección "Más información"** — mantener el `<Link to="/politica-privacidad">` y el `mailto:` pero en frases separadas, cada enlace aislado.

5. **No tocar**: `LegalPage.tsx` (los estilos `[&_a]:underline` solo decoran, no capturan clics), texto legal, diseño, tipografía, ni el resto de rutas. Verificar tras el cambio que no haya `position: absolute`, `::before/::after` con `pointer-events` ni overlays añadidos.

## Verificación manual
Tras aplicar, abrir `/politica-cookies` en desktop y móvil y comprobar uno a uno que cada enlace abre su URL exacta en nueva pestaña y que el clic en el texto de alrededor no dispara ningún enlace.
