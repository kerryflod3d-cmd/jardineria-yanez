# Pruebas antes del primer commit

Las pruebas locales **no hacen commits ni afectan la web publicada**. No copies la carpeta `.git` ni `node_modules` desde el ZIP. Es recomendable trabajar sobre un clon del repositorio o una carpeta separada.

## 0. Revisar galerías sin instalar nada

Después de extraer el ZIP, abre `docs/revision-galerias.html` con Chrome o Edge. La página auxiliar muestra las **37 entradas en el orden original** y permite abrir cada imagen o video. Los archivos están enlazados de forma relativa; no muevas el HTML fuera de la carpeta del proyecto. No sustituye las pruebas de funcionamiento de Astro.

## 1. Preparar el entorno (Windows PowerShell)

Instala **Node.js 22.20 o superior** y comprueba:

```powershell
node --version
npm --version
```

Descomprime el ZIP y abre PowerShell dentro de `jardineria-yanez-profesional`:

```powershell
npm ci
npm run qa
```

`qa` valida nombres y archivos, ejecuta tests de contenido/formularios/orden y compila el sitio. Si alguna comprobación falla, revísala antes de publicar.

## 2. Ver el sitio localmente

```powershell
npm run dev
```

Abre `http://localhost:4321` (o el puerto que indique Astro). Los cambios de código se reflejan en el navegador sin generar commits.

Para revisar el sitio **tal como se compilará en producción**, ejecuta:

```powershell
npm run build
npm run preview
```

Abre la URL local que muestre el terminal.

## 3. Probar en el teléfono

Con el PC y el teléfono conectados a la misma red Wi-Fi:

```powershell
npm run dev -- --host 0.0.0.0
ipconfig
```

Busca la dirección IPv4 local del PC (por ejemplo, `192.168.1.35`), y en el teléfono entra a `http://192.168.1.35:4321` sustituyendo esa dirección por la tuya. Puede requerir permitir Node.js en el firewall de Windows en **red privada**. Detén el servidor con `Ctrl+C` al finalizar. No abras puertos en el router ni compartas esta dirección fuera de tu red.

## 4. Lista manual de aceptación

- **Pantallas:** 360, 390, 768, 1024, 1280 y 1920 px, sin desplazamiento horizontal ni texto cortado. En Chrome/Edge abre F12 y activa la vista de dispositivos con `Ctrl+Shift+M`.
- **Navegación:** menú móvil abre/cierra, anchors correctos, enlace directo de WhatsApp y teléfono con `+56 9 3221 0427`.
- **Galerías:** comprueba las **5 galerías** y su orden; desliza horizontalmente dentro de cada servicio o utiliza los botones «←» y «→». Todas las fotos y videos deben verse en el mismo orden; los videos deben mostrar una portada con botón de reproducción. Al pulsar una foto o un video, debe abrirse un visor sobre la misma página; la X y Escape deben cerrarlo. Ningún recurso debe abrir una nueva pestaña. Comprueba que el visor se adapta a imágenes verticales y horizontales.
- **Barra climática fija:** desplázate hasta el final de la página y confirma que la barra con Retiro, Copihue, Parral, Longaví y Linares sigue visible; en móvil comprueba que la barra recorre automáticamente las cinco localidades sin cortar la información y que respeta la preferencia del sistema de movimiento reducido. Si una localidad muestra `—`, inspecciona la pestaña Red/Network y verifica el acceso a MET Norway. No muestres cifras inventadas para tapar fallos de red.
- **Contenido:** confirma que no aparece en ninguna parte «En terreno / El trabajo habla por nosotros» ni fotos duplicadas de demostración.
- **Diseño:** revisa portada, espaciados, tamaños de fuente, contraste, botones y tema claro/oscuro, también en escritorio ancho.
- **Formularios:** prueba mensajes válidos y errores. Los envíos **reales** llegan al correo configurado y requieren que FormSubmit esté activado. Usa datos de prueba y acuerda con el destinatario antes de enviar. El formulario de reseñas no publica contenido.
- **Rendimiento:** ejecuta Lighthouse desde Chrome DevTools, en móvil y escritorio, y revisa imágenes, red y errores de consola. No atribuyas puntuaciones sin medir.
- **Privacidad:** verifica que la política describe las integraciones activas y que no se suben contraseñas, `.env` ni archivos privados.

## 5. Revisión de Git antes de confirmar

Si estás trabajando sobre un clon Git:

```powershell
git status
git diff --check
git diff --stat
```

`git status` muestra archivos sin seguimiento que `git diff --stat` aún no incluye. Puedes comparar los archivos con VS Code antes de ejecutar `git add`, `git commit` o `git push`. **Ninguno de los comandos anteriores crea un commit**.

Después de validar manualmente, podrás crear una rama, abrir un pull request y revisar una vista previa de Vercel sin sustituir el sitio principal. Para eso sí hace falta confirmar y subir los cambios a la rama.

## Verificaciones de esta revisión

- Comprueba en un teléfono que deslizar horizontalmente las miniaturas **no abra accidentalmente el visor** y que aún puedes desplazar verticalmente la página.
- Amplía una fotografía vertical: debe verse completa dentro del visor aunque su miniatura se recorte para llenar la tarjeta.
- Abre un video, ciérralo mientras está reproduciéndose y confirma que el sonido se detiene.
- Comprueba que la X del visor siga visible incluso con el teléfono en horizontal.
- Desplázate hacia abajo: la barra meteorológica debe mantenerse pegada al encabezado y recorrer las cinco localidades.
- Revisa al final del sitio el enlace de atribución a MET Norway y a la licencia CC BY 4.0.

Los tests de Node no reemplazan las pruebas de navegador, la compilación Astro ni los envíos reales de formularios.
