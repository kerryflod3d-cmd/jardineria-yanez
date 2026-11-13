import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { services, mediaPath, posterPath } from '../src/data/services.ts';
import { site, whatsappUrl } from '../src/config/site.ts';

test('teléfono consistente en enlaces de WhatsApp y llamadas', () => {
  assert.equal(site.phoneLabel, '+56 9 3221 0427');
  assert.equal(site.phoneE164, '+56932210427');
  assert.match(whatsappUrl(), /wa\.me\/56932210427/);
});

test('cada servicio tiene imágenes y archivos existentes', () => {
  assert.equal(services.length, 5);
  for (const service of services) {
    assert.ok(service.media.length > 0);
    for (const asset of service.media) {
      assert.ok(asset.alt.trim());
      assert.ok(existsSync(`public${mediaPath(asset, 1600)}`));
      if (asset.type === 'video') assert.ok(existsSync(`public${posterPath(asset)}`));
    }
  }
});
