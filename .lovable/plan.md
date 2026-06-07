
## Problema

Cuando cambias de pestaña (ej. de `/servicios` a `/contacto`), la nueva página aparece "vacía" porque el navegador **mantiene la posición de scroll** de la página anterior. Como las páginas son largas, te aparece el final en blanco y parece que se ha quedado pillado.

Aunque `scrollRestoration: true` ya está activo en `src/router.tsx`, no siempre lleva al top en navegaciones nuevas (solo restaura en back/forward). Necesitamos forzar scroll al top en cada cambio de ruta.

## Cambios

### 1. Scroll-to-top en cada navegación
Añadir en `src/routes/__root.tsx` (dentro de `RootComponent`) un pequeño efecto que escuche el cambio de `pathname` con `useRouterState` y haga `window.scrollTo({ top: 0 })`. Sin librerías nuevas.

```tsx
const pathname = useRouterState({ select: (s) => s.location.pathname });
useEffect(() => { window.scrollTo({ top: 0 }); }, [pathname]);
```

### 2. Ocultar el badge "Edit with Lovable"
No se quita por código — es un ajuste de publicación. Lo desactivo con la herramienta `publish_settings--set_badge_visibility` (`hide_badge: true`). Requiere plan Pro o superior; si tu cuenta no lo tiene, te avisaré.

## Lo que NO toco

- Ni estilos, ni rutas, ni contenido.
- No añado librerías.
