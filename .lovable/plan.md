## Integrar el logo real de Hathor

Has subido el logo vectorizado en PDF. Lo integraré en la web sustituyendo el wordmark de texto actual ("Hathor") por la imagen del logo, manteniendo el estilo premium y minimalista.

### Pasos

1. **Convertir el PDF a imagen utilizable en web**
   - Extraer el logo del PDF a PNG transparente de alta resolución (para soportar fondos claros y la cabecera transparente al hacer scroll).
   - Subirlo a Lovable Assets (CDN) como `hathor-logo.png` con fondo transparente, en lugar de meter el binario en el repo.

2. **Cabecera (`SiteHeader.tsx`)**
   - Reemplazar el texto `Hathor` del enlace al home por `<img src={logo} alt="Hathor" />`.
   - Altura controlada (~32–36px) para encajar con la barra de 80px actual.
   - Mantener el mismo enlace a `/`, comportamiento de scroll y menú móvil intactos.

3. **Footer (`SiteFooter.tsx`)**
   - Sustituir el wordmark grande del bloque izquierdo por el logo (~40–48px de alto).
   - Mantener el texto descriptivo y el resto del footer sin cambios.

4. **Favicon y metadatos sociales (opcional, ligero)**
   - Si el logo se ve bien en cuadrado, generar también una versión recortada para favicon y `og:image` por defecto. Si no encaja bien por proporciones, lo dejamos para otra iteración y solo cambio cabecera + footer.

### Qué NO se toca

- Tipografías, colores, paleta nude/oro, estructura de páginas y todas las demás secciones quedan exactamente igual.
- Tratamientos, productos, FAQ, contacto: sin cambios.

### Pregunta rápida

¿Quieres que aplique también el logo en el favicon y la imagen de compartir social (`og:image`), o de momento solo en cabecera y footer?
