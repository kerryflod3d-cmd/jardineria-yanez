# Jardinería Yáñez — Ajustes de la versión 4

Esta entrega parte de la **V3**, conserva el orden original de sus **37 fotografías/videos** y no modifica el sitio en producción ni realiza commits.

## Cambios de interfaz

1. El botón **Solicitar Presupuesto Gratis** usa el mismo verde (`#079b49`) del botón de enviar mensaje, con texto blanco.
2. Las miniaturas de servicios ocupan su marco completo (`object-cover`) y dejan de mostrar fondos y franjas grises. **El archivo original no se recorta**: se visualiza completo al abrir el visor.
3. Fotos y videos se abren en un **diálogo modal en la misma pestaña**, con **X**, cierre con **Escape** y controles del video. El video se detiene al cerrar el visor.
4. Se conserva el **desplazamiento horizontal nativo** y el orden de cada carrusel. Se ignoran los clics accidentales al arrastrar el contenido con el dedo.
5. La barra climática mantiene la posición fija con el encabezado y **recorre continuamente** las cinco localidades de la versión original: Retiro, Copihue, Parral, Longaví y Linares. El contenido se duplica únicamente para lograr una animación continua; no se duplica la consulta a la API.
6. El nombre de MET Norway ya no ocupa espacio en la barra. La **atribución y el vínculo a la licencia CC BY 4.0** están en el pie de página, según las condiciones del proveedor.

## Estructura técnica

- `src/components/sections/Hero.astro`: botón principal.
- `src/components/sections/Services.astro`: miniaturas, controles y modal.
- `src/lib/media-viewer.ts`: apertura/cierre, prevención de aperturas por arrastre, gestión de video.
- `src/components/layout/WeatherTicker.astro`: ticker continuo y datos por localidad.
- `src/components/layout/Footer.astro`: atribución del proveedor meteorológico.
- `src/styles/global.css`: aspecto de miniaturas, modal y movimiento accesible.
- `tests/visual-behavior.test.mjs`: cuatro pruebas de regresión añadidas.
- `README.md`, `CHANGELOG.md`, `docs/implementacion.md`, `docs/pruebas-locales.md`: documentación actualizada.

## Resultado de validación

- **18/18 pruebas de Node aprobadas**.
- **5 servicios y 37 recursos multimedia encontrados y validados**.
- **Build Astro pendiente de confirmar**: `npm ci` no se completó en el entorno de revisión (Node instalado 22.16, mínimo solicitado por el proyecto 22.19, y error del gestor npm). No se ha probado la interfaz V4 en un navegador real ni el acceso a MET Norway desde el dominio de producción.

## Cómo probarlo en Windows antes del commit

Instala Node.js **22.20 o más reciente** y, desde la carpeta del proyecto, ejecuta:

```powershell
npm ci
npm run qa
npm run dev
```

Abre `http://localhost:4321` y prueba los gestos desde DevTools o desde un teléfono conectado a la misma Wi-Fi; para esto último puedes iniciar el desarrollo con `npm run dev -- --host 0.0.0.0`.

Comprueba el botón de presupuesto, las miniaturas sin franjas grises, ampliaciones de fotos y videos con **X/Escape**, funcionamiento del scroll en móviles, y el ticker con cinco localidades. Confirma también el crédito meteorológico en el footer.
