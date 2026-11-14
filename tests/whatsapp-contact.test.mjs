import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildWhatsAppInquiry } from '../src/lib/whatsapp-message.mjs';

test('la consulta contiene nombre, servicio y mensaje sin datos añadidos', () => {
  assert.equal(
    buildWhatsAppInquiry({ name: '  Ana   Pérez ', service: 'Poda ornamental', message: '  Quiero cotizar una poda.  ' }),
    'Hola, soy Ana Pérez.\nServicio: Poda ornamental\nConsulta: Quiero cotizar una poda.'
  );
});

test('no genera consultas sin los tres datos requeridos', () => {
  assert.throws(() => buildWhatsAppInquiry({ name: '', service: 'Poda', message: 'Hola' }), TypeError);
  assert.throws(() => buildWhatsAppInquiry({ name: 'Ana', service: '', message: 'Hola' }), TypeError);
  assert.throws(() => buildWhatsAppInquiry({ name: 'Ana', service: 'Poda', message: '  ' }), TypeError);
});

test('la asesoría utiliza únicamente WhatsApp sin solicitar correo o teléfono', () => {
  const contact = readFileSync('src/components/sections/Contact.astro', 'utf8');
  assert.match(contact, /id="contact-name"/);
  assert.match(contact, /id="contact-service"/);
  assert.match(contact, /name="message"/);
  assert.match(contact, /services\.map/);
  assert.match(contact, /window\.location\.assign\(whatsappUrl\(message\)\)/);
  assert.match(contact, /Presiona Enviar/);
  assert.doesNotMatch(contact, /formsubmit\.co|sendForm|id="contact-email"|id="contact-phone"/);
  const testimonials = readFileSync('src/components/sections/Testimonials.astro', 'utf8');
  assert.match(testimonials, /formsubmit\.co/);
});
