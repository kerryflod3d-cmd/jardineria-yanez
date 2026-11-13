# Caso de estudio: profesionalización de Jardinería Yáñez

## Contexto

Jardinería Yáñez es una web informativa para un negocio de cuidado de áreas verdes en la Región del Maule. Se construyó inicialmente priorizando la navegación móvil. El objetivo de esta evolución fue mejorar también la experiencia de escritorio y facilitar el mantenimiento de la web comercial.

## Problemas identificados

- Teléfono impreso distinto del que abría WhatsApp.
- Reseñas con un flujo de correo manual, pero sin detección correcta de fallos del proveedor externo.
- Galerías con reproducción automática y navegación insuficiente por teclado.
- Archivos multimedia pesados; imágenes no preparadas para tamaños de pantalla distintos.
- Un ticker meteorológico que convertía una única temperatura en valores ficticios para otras localidades.
- README genérico y ausencia de pruebas y validación automatizadas.

## Solución implementada

El proyecto se reorganizó usando componentes Astro estáticos, configuración centralizada y datos tipados. La interfaz adopta una portada más equilibrada en escritorio, conserva navegación accesible en móvil y reduce el JavaScript a interacciones imprescindibles. Las fotografías tienen dos variantes WebP y las galerías quedan visibles dentro de carruseles horizontales sin duplicación de contenidos. Los formularios confirman la respuesta del proveedor antes de informar éxito.

El modelo de reseñas se mantiene deliberadamente simple: el visitante envía su opinión, el negocio la recibe por correo y decide manualmente si publicarla. No se instaló una base de datos ni un sistema de autenticación sin necesidad.

## Evidencia reproducible

| Indicador | Antes (ZIP de partida) | Versión preparada |
| --- | --- | --- |
| Tamaño aproximado de `public/` | 46 MiB | 22 MiB |
| Pruebas unitarias ejecutadas | Sin suite en el proyecto recibido | 20 pruebas aprobadas en la revisión local de la versión final |
| Referencias de multimedia comprobadas | Sin validación sistemática | 37 referencias validadas |
| Datos de contacto | Fuentes de datos dispersas | Configuración centralizada |
| Publicación de reseñas | Inserción manual | Inserción manual, documentada |

Las cifras de tamaños son mediciones del conjunto de archivos publicados, **no** del peso descargado al abrir la página. Las puntuaciones de Lighthouse, métricas de uso y la compilación en un entorno limpio aún deben medirse y documentarse.

## Compromisos técnicos

- **Sin backend propio:** reduce costes y mantenimiento, pero el sitio depende del proveedor externo de formularios.
- **Pronósticos independientes:** MET Norway permite uso comercial con atribución y condiciones de uso; se consultan cinco coordenadas sin alteraciones ficticias, con caché y degradación elegante si el servicio no responde.
- **HTML estático + Astro:** preserva simplicidad; no hace falta agregar una SPA.
- **Validación progresiva:** se incorporan pruebas de lógica y flujo; siguen pendientes pruebas de integración visual y verificación manual de formularios reales.

## Criterios de mantenimiento

La evolución se realizó conservando los contenidos comerciales y el orden de los recursos multimedia. La arquitectura separa información, componentes e interacciones para facilitar cambios sin afectar otras secciones. La suite automatizada cubre consistencia de datos, integraciones y regresiones de la interfaz; la publicación requiere además validar la compilación y las interacciones en navegadores reales.
