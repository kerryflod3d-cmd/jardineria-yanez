import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { services, mediaPath, posterPath } from '../src/data/services.ts';

const galleryOrder = JSON.parse(readFileSync('docs/orden-galerias.json', 'utf8'));

test('las galerías mantienen el orden exacto del proyecto original', () => {
  assert.deepEqual(services.map(({ id }) => id), Object.keys(galleryOrder));
  for (const service of services) {
    const expected = galleryOrder[service.id].map(({ id, type }) => ({ id, type }));
    const current = service.media.map(({ id, type }) => ({ id, type }));
    assert.deepEqual(current, expected, `Orden alterado en ${service.id}`);
  }
});

test('los nombres de multimedia son únicos y las portadas usan fotografías reales', () => {
  const seen = new Set();
  for (const service of services) {
    assert.ok(service.media.some(({ id, type }) => id === service.cover && type === 'image'));
    for (const item of service.media) {
      assert.match(item.id, /^[a-z]+(?:-[a-z]+)*-\d{2}$/);
      assert.ok(!seen.has(item.id), `ID duplicado: ${item.id}`);
      seen.add(item.id);
      assert.ok(item.alt.trim().length > 10);
      if (item.type === 'video') {
        assert.ok(existsSync(`public${mediaPath(item)}`));
        assert.ok(existsSync(`public${posterPath(item)}`));
      } else {
        assert.ok(existsSync(`public${mediaPath(item, 560)}`));
        assert.ok(existsSync(`public${mediaPath(item, 1600)}`));
      }
    }
  }
  assert.equal(seen.size, 37);
});
