import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { navigation } from '../src/config/site.ts';
import { services } from '../src/data/services.ts';

const read = (path) => readFileSync(path, 'utf8');
test('sección de trabajos redundante eliminada en lugar de ocultarse', () => {
  assert.doesNotMatch(read('src/pages/index.astro'), /<Work\s*\/>/);
  assert.equal(existsSync('src/components/sections/Work.astro'),false);
  assert.equal(navigation.some(item => item.href === '#trabajos'),false);
});
test('textos comerciales originales y nuevos nombres', () => {
  assert.match(read('src/components/sections/Hero.astro'), /Creciendo/);
  assert.match(read('src/components/sections/Hero.astro'), /Diseño, mantenimiento y cuidado profesional/);
  assert.match(read('src/components/sections/Services.astro'), /Nuestros servicios/);
  assert.deepEqual(services.slice(2).filter(s=>s.id==='retiro'||s.id==='ligustrinas').map(s=>s.name),['Retiro de Sarmientos y Escombros','Limpieza y perfilado de ligustinas']);
  assert.doesNotMatch(read('src/components/sections/Services.astro'), /gallery-trigger|\/ SERVICIOS/);
  assert.match(read('src/components/layout/Footer.astro'), /Un jardín cuidado no es solo un espacio verde/);
});
