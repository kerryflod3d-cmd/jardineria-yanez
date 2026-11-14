# Jardinería Yáñez

Sitio web de **Jardinería Yáñez**, servicio de mantención de jardines y áreas verdes con atención en Retiro y localidades cercanas de la Región del Maule, Chile.

Desarrollé esta web para reunir los servicios del negocio, mostrar trabajos realizados y facilitar las solicitudes de presupuesto. La implementación utiliza Astro para generar páginas estáticas y mantiene las interacciones del navegador desacopladas del contenido.

**[Sitio web](https://jardineria-yanez.vercel.app/)** · **[Código fuente](https://github.com/kerryflod3d-cmd/jardineria-yanez)**

![Presentación de Jardinería Yáñez](public/og-cover.jpg)

## Funcionalidades

- **Catálogo de servicios:** cinco categorías con fotografías y videos organizados en carruseles horizontales, navegación táctil y visor ampliado dentro de la página.
- **Contacto y cotización:** formulario que prepara la consulta para WhatsApp, con nombre, servicio y mensaje; el cliente confirma el envío desde su aplicación. Acceso adicional a teléfono e Instagram.
- **Reseñas:** presentación de testimonios en un carrusel y formulario de valoración. Las publicaciones se revisan y se incorporan manualmente.
- **Información meteorológica:** barra fija con pronósticos para Retiro, Copihue, Parral, Longaví y Linares, obtenidos por coordenadas independientes.
- **Experiencia adaptativa:** distribución para móvil y escritorio, navegación por secciones, modo oscuro y controles utilizables con teclado.
- **Metadatos y publicación:** etiquetas para buscadores y redes sociales, sitemap y despliegue estático en Vercel.

## Tecnologías

| Herramienta | Uso |
| --- | --- |
| [Astro](https://astro.build/) 7 | Generación estática, páginas y componentes. |
| [Tailwind CSS](https://tailwindcss.com/) 4 | Estilos y diseño responsivo. |
| TypeScript y JavaScript | Configuración de contenidos e interacciones del navegador. |
| [FormSubmit](https://formsubmit.co/) | Envío de reseñas al correo del negocio. |
| [MET Norway](https://api.met.no/) | Pronósticos meteorológicos por localidad. |
| [Vercel](https://vercel.com/) | Despliegue. |
| Node.js `node:test` y GitHub Actions | Pruebas automatizadas e integración continua. |

## Arquitectura

El sitio se genera como HTML estático. El JavaScript se limita a las funciones que requieren interacción: menú móvil, tema, carruseles, visor multimedia, formularios y barra meteorológica. No se utiliza un framework de interfaz adicional ni un backend propio.

Los datos comerciales están separados de los componentes para permitir cambios sin modificar la estructura de las páginas:

```text
src/
├── components/
│   ├── layout/       # Navegación, clima y pie de página
│   └── sections/     # Portada, servicios, testimonios y contacto
├── config/site.ts    # Contacto, enlaces y navegación
├── data/             # Catálogo, testimonios, cobertura y localidades
├── layouts/          # Estructura de página y metadatos
├── lib/              # Lógica de formularios, carruseles y visor
├── pages/            # Rutas, sitemap y robots.txt
└── styles/           # Estilos globales
```

El catálogo multimedia se define en `src/data/services.ts`. Cada servicio declara explícitamente el orden de sus fotografías y videos; la visualización no depende de los nombres de archivo ni de su orden alfabético. Las fotografías utilizan variantes WebP para miniaturas y ampliaciones.

## Desarrollo local

Se requiere **Node.js 22.19 o superior** y npm.

```bash
git clone https://github.com/kerryflod3d-cmd/jardineria-yanez.git
cd jardineria-yanez
npm ci
npm run dev
```

El servidor local utiliza `http://localhost:4321` por defecto.

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo. |
| `npm run build` | Compilación estática en `dist/`. |
| `npm run preview` | Vista previa de la compilación. |
| `npm run validate` | Comprobación de configuración y recursos multimedia. |
| `npm test` | Pruebas automatizadas. |
| `npm run qa` | Validación, pruebas y compilación. |

La integración continua ejecuta estas comprobaciones mediante [GitHub Actions](.github/workflows/quality.yml) en las actualizaciones de `main` y en los pull requests.

## Integraciones y mantenimiento

**Formularios.** Las solicitudes de asesoría se preparan localmente y abren una conversación de WhatsApp con el mensaje precargado; el visitante debe pulsar Enviar para que el negocio lo reciba. Solo el formulario de reseñas utiliza FormSubmit para entregar opiniones al correo del negocio. No se almacenan mensajes en una base de datos y las reseñas se publican después de una revisión manual.

**Clima.** La barra consulta MET Norway para cinco localidades y conserva temporalmente los resultados en el navegador. Muestra estimaciones meteorológicas y presenta un estado no disponible cuando la consulta falla. La atribución y licencia del proveedor se incluyen en el pie de página.

**Contenido.** Los cambios habituales están concentrados en estos archivos:

| Contenido | Archivo |
| --- | --- |
| Teléfono, WhatsApp, correo y enlaces | [`src/config/site.ts`](src/config/site.ts) |
| Servicios y orden de las galerías | [`src/data/services.ts`](src/data/services.ts) |
| Reseñas publicadas | [`src/data/testimonials.ts`](src/data/testimonials.ts) |
| Localidades y pronósticos | [`src/data/weather.mjs`](src/data/weather.mjs) |
| Recursos multimedia | [`public/media/`](public/media/) |

El [inventario multimedia](docs/inventario-multimedia.csv) permite identificar los recursos y sus nombres anteriores. La [guía de galerías](docs/guia-galerias.md) describe cómo añadir o reemplazar fotografías y videos.

## Despliegue

El proyecto está configurado para despliegue estático en Vercel:

```text
Build command:  npm run build
Output folder:  dist
```

La URL canónica se configura en `astro.config.mjs` y `src/config/site.ts`. Los cambios en servicios, medios y textos se publican con una nueva compilación.

## Documentación

- [Caso de estudio](docs/caso-estudio.md): problemas detectados, decisiones técnicas y evolución de la implementación.
- [Guía de pruebas locales](docs/pruebas-locales.md): comprobaciones de navegación, formularios, carruseles y dispositivos.
- [Registro de cambios](CHANGELOG.md): historial de las principales revisiones.

## Autoría y derechos

**Desarrollo y mantenimiento:** [kerryflod3d-cmd](https://github.com/kerryflod3d-cmd). Sitio realizado para Jardinería Yáñez.

La marca, las fotografías, los videos y los testimonios pertenecen a sus respectivos titulares. El código de este repositorio no dispone actualmente de una licencia de redistribución.
