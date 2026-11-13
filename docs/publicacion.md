# Guía de revisión, integración y publicación

La web disponible actualmente en Vercel no se modifica al descargar este proyecto. Trabaja primero en una rama y publica cuando las verificaciones estén completas.

## 1. Preparar una rama

```bash
git clone https://github.com/kerryflod3d-cmd/jardineria-yanez.git
cd jardineria-yanez
git switch -c refactor/sitio-profesional
```

Antes de copiar la nueva versión, elimina los archivos que Git tiene bajo seguimiento para no dejar componentes antiguos mezclados con los nuevos:

```bash
git rm -r .
```

Descomprime el ZIP final y copia **el contenido** de `jardineria-yanez-final/` en la raíz del clon. Conserva intacta la carpeta `.git` y no incorpores `node_modules`, `dist` ni secretos. `git rm` prepara las bajas para el commit, pero no cambia la rama principal. Revisa `git status` antes de confirmar.

## 2. Ejecutar verificaciones

Usa Node.js 22.20 o superior. Con acceso a Internet:

```bash
npm ci
npm run qa
npm run dev
```

Puedes abrir primero `docs/revision-galerias.html` para comprobar el orden original de las 37 entradas. Después, revisa en el navegador al menos cuatro anchos de pantalla (360, 768, 1280 y 1920 px), navegación con teclado, galería con fotos y videos, modo claro/oscuro, enlaces telefónicos y WhatsApp, mapa y estado de ambos formularios.

## 3. Confirmar con el negocio

- Teléfono correcto: **+56 9 3221 0427**.
- Destino de formularios: **jardineriayanez@icloud.com** (conservar como está solo si el propietario confirma que el correo está activo y verificado en FormSubmit).
- Validar autorización para fotografías y publicación de comentarios atribuidos a clientes.
- Comprobar si los textos de cobertura reflejan las zonas actualmente atendidas.
- Revisar el texto de privacidad con quien administra los correos.

## 4. Integrar y desplegar

```bash
git add -A
git commit -m "refactor: profesionalizar sitio de Jardinería Yáñez"
git push -u origin refactor/sitio-profesional
```

Abre un pull request en GitHub y comprueba el resultado del workflow `Calidad y compilación`. Utiliza la vista previa de Vercel para probar los formularios desde un origen real. Al aprobar el cambio, integra a `main` y verifica nuevamente el sitio público.

## 5. Comprobación final

No incluyas en el CV puntuaciones o resultados que no hayas medido. Registra Lighthouse móvil/escritorio y resultados de las pruebas reales después de verificar el despliegue. Si la compilación o un formulario falla, no publiques la nueva versión hasta corregirlo.
