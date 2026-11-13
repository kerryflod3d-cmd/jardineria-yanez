import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = (name) => readFileSync(name, 'utf8');

test('la acción de presupuesto usa el verde comercial', () => {
  const hero = read('src/components/sections/Hero.astro');
  assert.match(hero, /bg-\[\#079b49\]/);
  assert.match(hero, /Solicitar Presupuesto Gratis/);
});

test('las miniaturas no usan fondos ni bordes y abren un visor modal', () => {
  const service = read('src/components/sections/Services.astro');
  assert.match(service, /data-media-open/);
  assert.match(service, /object-cover/);
  assert.match(service, /<dialog id="media-viewer"/);
  assert.match(service, /id="media-viewer-close"/);
  assert.doesNotMatch(service, /target="_blank"/);
  assert.doesNotMatch(service, /object-contain" controls playsinline preload="none"/);
  const view = read('src/lib/media-viewer.ts');
  assert.match(view, /dialog\.showModal\(\)/);
  assert.match(view, /dialog\.addEventListener\('close'/);
  assert.match(view, /video\.pause\(\)/);
  assert.match(view, /suppressClick/);
});

test('la barra rota las cinco localidades, actualiza ambas copias y respeta movimiento reducido', () => {
  const weather = read('src/components/layout/WeatherTicker.astro');
  const css = read('src/styles/global.css');
  assert.match(weather, /weatherLocations\.map/g);
  assert.equal((weather.match(/weatherLocations\.map/g) ?? []).length, 2);
  assert.match(weather, /querySelectorAll<HTMLElement>/);
  assert.doesNotMatch(weather, /MET Norway ↗/);
  assert.match(css, /weather-marquee 32s linear infinite/);
  assert.match(css, /prefers-reduced-motion: reduce/);
});

test('la atribución a la fuente del clima se mantiene en el pie de página', () => {
  const footer = read('src/components/layout/Footer.astro');
  assert.match(footer, /MET Norway/);
  assert.match(footer, /creativecommons\.org\/licenses\/by\/4\.0/);
});
