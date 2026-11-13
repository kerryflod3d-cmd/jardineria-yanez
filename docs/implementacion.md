# Implementación y verificación de la versión profesionalizada

## Cambios realizados

| Área | Versión de partida | Nueva implementación |
|---|---|---|
| Contacto | Número telefónico distinto al destino de WhatsApp | Constantes centralizadas en `src/config/site.ts` con **+56 9 3221 0427** |
| Navegación | Encabezado diseñado principalmente para móvil | Menú de escritorio, panel móvil accesible, enlace CTA y controles de tema |
| Diseño | Hero alto con texto de contraste irregular | Hero con la orilladora de fondo, textos comerciales originales y tipografía/overlay adaptados a móvil y escritorio |
| Galería | Clic en imágenes/videos sin control de foco y reproducción automática | Carrusel visible por servicio, miniaturas sin franjas laterales y visor modal accesible de fotos/videos, sin pestañas nuevas ni reproducción automática |
| Multimedia | JPG originales pesados y elementos sin tamaños | WebP en dos resoluciones, posters y carga diferida |
| Formularios | Reseñas anunciaban éxito sin comprobar respuesta | Se requiere respuesta HTTP correcta y confirmación del proveedor; mensajes en página |
| Reseñas | Contenido dentro del propio componente | Datos en `src/data/testimonials.ts`, actualización manual, sin publicación automática |
| Clima | Una lectura con ajustes ficticios para varias comunas | Barra fija y animada con cinco coordenadas independientes, control de errores, caché de tres horas y atribución CC BY en el pie de página |
| SEO | Metadatos mínimos | Canonical, Open Graph, JSON-LD conservador, robots.txt, sitemap y vista social |
| Calidad | Sin pruebas automatizadas ni CI | Pruebas unitarias y validaciones de medios/contacto; GitHub Actions |
| Documentación | README de plantilla | README específico y guía técnica en español |

## Criterios de diseño

- **Astro estático:** no se agrega backend propio ni una librería de componentes pesada.
- **Datos desacoplados:** servicios, cobertura, testimonios y contactos se modifican en archivos concretos.
- **Reseñas moderadas:** el formulario envía correos; no existe una base de datos de opiniones ni publicación automática.
- **Respuestas verificables:** un `fetch` exitoso no equivale a un envío aceptado; se valida el estado HTTP y la confirmación del servicio.
- **Accesibilidad por defecto:** navegación y galerías deben funcionar también sin ratón.
- **Sin métricas ficticias:** el reporte no anuncia puntajes Lighthouse no medidos.

## Qué verificar antes de publicar

1. En un equipo con Internet, usar Node.js 22.20+ y ejecutar `npm ci`, `npm run validate`, `npm test`, `npm run build`.
2. Abrir la web en pantallas de 360, 768, 1280 y 1920 px para comprobar que no aparezcan desbordamientos.
3. Probar el menú, el cambio de tema, los controles y el gesto horizontal en los carruseles, y la reproducción manual de videos.
4. Comprobar las cinco temperaturas aproximadas: deben consultarse individualmente, y debe aparecer `—` si no hay conexión. Probar el desplazamiento fijo de la barra climática.
5. Probar los dos formularios con el correo **ya activado en FormSubmit**. Comprobar llegada real de mensajes y rechazo en errores de red.
6. Confirmar que el propietario autoriza la visualización pública de testimonios con nombres y fotografías.
7. Revisar con el responsable del negocio la información de la página de privacidad y el correo receptor.
8. Ejecutar Lighthouse para móvil y escritorio y guardar mediciones con fecha y contexto.
9. Revisar `npm audit` y actualizar dependencias si corresponde, después de confirmar compatibilidades.

## Limitaciones de la validación realizada aquí

La instalación limpia de dependencias no llegó a completarse en este entorno; además, la versión de Node disponible es 22.16, inferior al requisito del proyecto (22.19+). No se ha confirmado el build de Astro ni una auditoría visual automatizada. Estos puntos deben verificarse en un equipo con Node 22.20+ y conexión a npm.

Sí es posible ejecutar en este entorno las validaciones de contenidos y las pruebas con `node:test` (independientes del build) usando Node.js 22 y soporte de TypeScript por eliminación de tipos. Los resultados se deben registrar tras ejecutarlas.

## Actualizaciones habituales

- **Teléfono, WhatsApp, correo y enlaces:** `src/config/site.ts`.
- **Servicios y galerías:** `src/data/services.ts` + recursos en `public/media/`.
- **Testimonios revisados:** `src/data/testimonials.ts`.
- **Localidades atendidas:** `src/data/coverage.ts`.
- **Pronósticos y coordenadas:** `src/data/weather.mjs`, `src/components/layout/WeatherTicker.astro`.
- **Metadatos generales:** `src/layouts/Layout.astro` y `src/config/site.ts`.
- **Estética:** `src/styles/global.css` y clases de componentes.

## Ajustes de diseño y contenido de la tercera revisión

- Eliminada **por completo** la sección «En terreno / El trabajo habla por nosotros» y su archivo `Work.astro`, sin copiar sus fotos a otra sección.
- Restaurados título, párrafo y botones de la portada original, ahora sobre una imagen de orilladora con degradado para garantizar legibilidad.
- Servicio «Retiro de Sarmientos y Escombros» y «Limpieza y perfilado de ligustinas» (nombres visibles solicitados); se mantienen los nombres técnicos de los archivos por estabilidad.
- Los cinco servicios muestran todas las imágenes y videos directamente, con desplazamiento horizontal y sin índices visuales «01/Servicios».
- Testimonios en una fila horizontal; título y descripción de la versión original; formulario compacto con selector nativo de estrellas.
- Contacto con el texto inicial del proyecto, número de teléfono actualizado y acceso destacado a Instagram.
- Pie de página con frases originales, tres beneficios y logo en marca de agua, con navegación y política de privacidad.
- La secuencia de las 37 entradas se conserva y sigue cubierta por `tests/gallery-order.test.mjs`.
