import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { services, mediaPath, posterPath } from '../src/data/services.ts';
import { site } from '../src/config/site.ts';

const errors = [];
const exists = (path) => existsSync(resolve('public', path.replace(/^\//,'')));
for (const service of services) {
  if (!service.media.length) errors.push(`${service.id} no tiene contenido multimedia.`);
  for (const item of service.media) {
    const target = item.type === 'video' ? mediaPath(item) : mediaPath(item, 1600);
    if (!exists(target)) errors.push(`Archivo faltante: ${target}`);
    if (item.type === 'image' && !exists(mediaPath(item, 560))) errors.push(`Miniatura faltante: ${item.id}`);
    if (item.type === 'video' && !exists(posterPath(item))) errors.push(`Poster faltante: ${item.id}`);
    if (!item.alt.trim()) errors.push(`Texto alternativo vacío: ${item.id}`);
  }
}
if (!/^\+569\d{8}$/.test(site.phoneE164) || !/^569\d{8}$/.test(site.whatsappNumber)) {
  errors.push('El formato del teléfono no coincide con Chile móvil.');
}
const references = ['src/components/sections/Contact.astro','src/components/layout/Footer.astro','src/components/layout/Navbar.astro'];
for (const file of references) {
  if (/6158\s?2671/.test(readFileSync(file,'utf8'))) errors.push(`Teléfono anterior encontrado en ${file}`);
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Contenido validado: ${services.length} servicios y ${services.reduce((sum, s) => sum+s.media.length,0)} archivos multimedia referenciados.`);
