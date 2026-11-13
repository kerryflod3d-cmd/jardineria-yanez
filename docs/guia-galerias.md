# Organización de las galerías

## Criterio de nombres

Los recursos web usan nombres en minúsculas, sin acentos ni espacios, agrupados por tipo de trabajo:

- `mantenimiento-cesped-01-560.webp`: miniatura para tarjeta o galería.
- `mantenimiento-cesped-01-1600.webp`: versión ampliada de la misma fotografía.
- `poda-ornamental-01.mp4`: video en la primera posición de la galería de poda.
- `poda-ornamental-01-poster.jpg`: portada del mismo video.

Los números reflejan las **posiciones iniciales del proyecto original**. Fotografías y videos comparten la misma secuencia. No se rellenan huecos históricos por orden alfabético y no se cambia el contenido de los archivos durante el renombrado.

## Orden y portadas

El **orden visible** se define exclusivamente en los arrays `media` de `src/data/services.ts`; nunca se infiere del nombre del archivo. La propiedad `cover` elige la fotografía de portada de cada servicio y no altera el orden de apertura de la galería. En poda y ligustrinas, el primer elemento de la galería original era un video, aunque la tarjeta muestre una fotografía.

Para comprobar visualmente la secuencia sin ejecutar Astro, abre [`revision-galerias.html`](revision-galerias.html) desde la carpeta extraída.

La referencia de migración está en:

- [`inventario-multimedia.csv`](inventario-multimedia.csv): nombre anterior, nombre nuevo, servicio y posición.
- [`orden-galerias.json`](orden-galerias.json): secuencia original registrada para pruebas automatizadas.

## Agregar o cambiar una foto

1. Conserva una copia del original en una carpeta **fuera de** `public/` y de Git si su tamaño es elevado.
2. Genera dos WebP de hasta 560 y 1600 px, sin ampliar imágenes pequeñas. El contenido de ambas versiones debe ser la misma fotografía.
3. Usa el siguiente identificador disponible de su servicio, por ejemplo `perfilado-ligustrinas-20`. **No renumeres archivos antiguos** para insertar una foto nueva.
4. Agrega `photo('perfilado-ligustrinas-20', 'Descripción específica de la foto')` en la posición visual deseada de `src/data/services.ts`.
5. Actualiza el registro de `docs/orden-galerias.json` para reflejar el nuevo orden intencional y el inventario CSV. Si solo sustituyes una imagen existente, no necesitas cambiar su identificador.
6. Ejecuta `npm run qa` y comprueba las galerías en el navegador.

Para un video usa un `.mp4`, un `-poster.jpg` y la función `video(...)`. Conserva la secuencia cronológica "antes → proceso → después" cuando corresponda a un mismo trabajo; no inventes esa relación si las tomas son de obras distintas.

> La prueba de orden evita cambios accidentales. Si necesitas reorganizar una galería por una razón editorial, modifica de forma explícita tanto el array como el inventario y verifica visualmente el resultado.
