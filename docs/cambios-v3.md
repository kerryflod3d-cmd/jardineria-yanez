# Cambios de la tercera versión — guía rápida

## Pantalla inicial

`src/components/sections/Hero.astro`: vuelve el mensaje **«Creciendo tu Jardín, Cuidando tu Hogar»**, con los dos botones originales. La foto de la orilladora se utiliza detrás del texto con un degradado oscuro para mantener el contraste. Se reemplaza «Trabajos reales» por «Presupuesto sin costo».

## Servicios

`src/components/sections/Services.astro`: fotos y videos están presentes en la tarjeta desde la carga de la página. El desplazamiento es horizontal; en PC puedes usar las flechas, la rueda horizontal del ratón o el trackpad; en móvil, arrastra con el dedo. Las fotografías se abren a tamaño completo en otra pestaña si se desea; los videos no arrancan automáticamente. Se elimina la etiqueta numérica y el botón «Ver galería». El archivo `src/components/sections/Work.astro` se elimina para evitar duplicados.

`src/data/services.ts`: los textos visibles cambian, pero no se altera ningún identificador ni posición de medio. Compara con `docs/orden-galerias.json` y ejecuta `npm test` para comprobarlo.

## Reseñas y contacto

`src/components/sections/Testimonials.astro`: testimonios en fila deslizable y formulario simple, con estrellas seleccionables y accesibles mediante teclado. Las opiniones siguen llegando al correo a través de FormSubmit y se publican manualmente.

`src/components/sections/Contact.astro`: recupera el texto comercial original, simplifica la forma de contacto y muestra Instagram. El número confirmado es **+56 9 3221 0427**.

## Clima y navegación

`src/components/layout/Navbar.astro` incorpora `WeatherTicker.astro` dentro de la cabecera fija. El proveedor es MET Norway y se muestran pronósticos modelados para cinco coordenadas distintas. El navegador guarda una respuesta por localidad durante tres horas para reducir el tráfico. Si no puede consultar, muestra `—` en lugar de un número inventado. La fuente se acredita en la misma barra. Se necesita verificar las condiciones de identificación y el acceso desde el dominio público antes de desplegar; si aumenta el tráfico, hay que integrar un proxy con caché.

## Pie de página

`src/components/layout/Footer.astro`: recupera la introducción, los tres beneficios y la frase final del proyecto original. Incluye el logo como marca de agua y enlaces básicos.

## Validación

- `npm run validate` revisa los recursos y el contacto.
- `npm test` revisa 14 casos, incluida la secuencia de 37 recursos.
- `npm run build` **debe ejecutarse localmente** con Node 22.20+; no se confirmó aquí por un bloqueo de instalación de dependencias y versión de Node inferior a la requerida.
- `npm run dev` permite ver todo sin subir cambios a GitHub.
- Probar la red meteorológica y los formularios en un navegador real antes de publicar.
