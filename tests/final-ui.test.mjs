import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { mobileNavigation } from '../src/config/site.ts';

const read = (path) => readFileSync(path, 'utf8');

test('tarjetas de servicios con el color beige de referencia', () => {
  const services = read('src/components/sections/Services.astro');
  assert.match(services, /services\.map\(\(service\) => <article[^\n]*bg-\[\#f5f5dc\]/);
  assert.doesNotMatch(services, /rounded-\[1\.8rem\][^\n]*bg-white/);
});

test('el menú móvil presenta las cinco secciones en orden', () => {
  assert.deepEqual(mobileNavigation.map((item) => item.label), [
    'Inicio', 'Servicios', 'Testimonios', 'Cobertura', 'Contacto',
  ]);
  assert.deepEqual(mobileNavigation.map((item) => `/${item.href}`), [
    '/', '/#servicios', '/#testimonios', '/#cobertura', '/#contacto',
  ]);
  const navbar = read('src/components/layout/Navbar.astro');
  assert.match(navbar, /mobileNavigation\.map/);
  assert.doesNotMatch(navbar, /class="btn btn-primary mt-2"/);
  assert.doesNotMatch(navbar, /WhatsApp directo/);
  assert.match(navbar, /text-stone-800 hover:bg-emerald-50 dark:text-white/);
});
