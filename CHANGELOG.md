# Historial de cambios

## Ajustes finales — 13 de noviembre de 2026

- Tarjetas de servicios con fondo beige `#F5F5DC`, conservando el modo oscuro.
- Menú móvil simplificado a Inicio, Servicios, Testimonios, Cobertura y Contacto, manteniendo su estilo.
- README revisado con enfoque técnico y comercial, sin contenido introductorio innecesario.
- Pruebas de regresión para color de tarjetas y navegación móvil.

## 1.0.0 — Profesionalización inicial (12 de noviembre de 2026)

- Identidad y enlaces comerciales centralizados, con teléfono verificado.
- Nuevo diseño de navegación y portada para escritorio y dispositivos móviles.
- Galerías de fotos y videos mediante diálogo accesible.
- Recursos gráficos optimizados; videos sin reproducción automática.
- Formularios de contacto y reseñas con mensajes de error/éxito verificados.
- Conservación del proceso de revisión manual de testimonios.
- Eliminación del ticker de clima que mostraba estimaciones no correspondientes a cada comuna.
- Metadatos SEO, vista previa social, mapa, robots y sitemap.
- Pruebas automatizadas, validación de datos y workflow de GitHub Actions.
- README, notas de arquitectura y caso de estudio técnico.

> Esta versión está pendiente de compilación y revisión visual en un entorno con acceso al registro de npm, además de pruebas reales del servicio de correo.

## Organización de galerías (revisión posterior)

- Normalización de 74 recursos de las 37 entradas de galería; versiones WebP y posters asociados.
- Recuperación del orden exacto de fotos y videos del componente original de servicios, especialmente en poda y ligustrinas.
- Portadas independientes de la primera posición de la galería.
- Inventario de migración, prueba de regresión del orden y guía para nuevas imágenes.
- Documentación de pruebas en PC y teléfono antes de hacer un commit.

## 1.1.0 — Ajustes de contenido y presentación (12 de noviembre de 2026)

- Eliminación definitiva de la sección duplicada de trabajos y su entrada de menú.
- Restauración de textos originales en portada, testimonios, contacto y pie de página.
- Portada con fotografía de orilladora como fondo y composición adaptativa para escritorio y móvil.
- Carruseles multimedia visibles directamente en cada servicio, sin «Ver galería» ni numeración de tarjetas.
- Nuevos nombres visibles de servicios, manteniendo el orden y las referencias multimedia originales.
- Carrusel horizontal de testimonios; formulario simplificado y valoración por estrellas con radios accesibles.
- Contacto minimalista con Instagram y teléfono definitivo; footer con logo en marca de agua.
- Clima fijo con cinco localidades consultadas separadamente a MET Norway (uso comercial con atribución), caché y fallback sin inventar datos.
- Suite ampliada a 14 pruebas de lógica, contenido e integridad. Compilación Astro y revisión visual pendientes en entorno compatible.

## 1.2.0 — Mejoras de galerías y barra climática (13 de noviembre de 2026)

- Botón principal de presupuesto en el verde comercial del formulario.
- Miniaturas sin bordes ni franjas laterales, con encuadre uniforme.
- Visor modal para fotografías y videos, con botón de cierre y tecla Escape, sin nuevas pestañas.
- Galerías táctiles con desplazamiento nativo, preservando el orden de los 37 recursos.
- Barra climática fija con movimiento continuo entre las cinco localidades, pausa al interactuar y respeto por movimiento reducido.
- Atribución meteorológica trasladada al pie de página con enlace a la licencia CC BY 4.0.
