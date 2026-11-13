import test from 'node:test';
import assert from 'node:assert/strict';
import { isFormSubmitSuccess, sendForm, SubmissionError } from '../src/lib/form-submit.mjs';

const response = (ok, payload) => ({ ok, json: async () => payload });

test('confirma éxito solo si HTTP y proveedor lo confirman', () => {
  assert.equal(isFormSubmitSuccess(response(true, {}), { success: 'true' }), true);
  assert.equal(isFormSubmitSuccess(response(true, {}), { success: true }), true);
  assert.equal(isFormSubmitSuccess(response(true, {}), { success: false }), false);
  assert.equal(isFormSubmitSuccess(response(false, {}), { success: 'true' }), false);
});

test('envía datos mediante POST JSON y respeta la respuesta de éxito', async () => {
  let request;
  const result = await sendForm('https://formsubmit.co/ajax/example@example.com', { Nombre: 'Ana' }, {
    fetcher: async (url, options) => { request = { url, options }; return response(true, { success: 'true' }); },
  });
  assert.equal(result.success, 'true');
  assert.equal(request.options.method, 'POST');
  assert.deepEqual(JSON.parse(request.options.body), { Nombre: 'Ana' });
});

test('rechaza una respuesta 500 aunque el cuerpo diga success', async () => {
  await assert.rejects(() => sendForm('test', {}, { fetcher: async () => response(false, { success: 'true' }) }), SubmissionError);
});

test('rechaza respuestas inválidas, vacías o sin éxito explícito', async () => {
  await assert.rejects(() => sendForm('test', {}, { fetcher: async () => response(true, { message: 'ok' }) }), SubmissionError);
  await assert.rejects(() => sendForm('test', {}, { fetcher: async () => ({ ok: true, json: async () => { throw Error('HTML'); } }) }), SubmissionError);
});

test('presenta un mensaje comprensible ante errores de red', async () => {
  await assert.rejects(() => sendForm('test', {}, { fetcher: async () => { throw Error('network'); } }), /conexión/);
});

test('rechaza solicitudes que exceden el tiempo máximo', async () => {
  const fetcher = (_, { signal }) => new Promise((_, reject) => {
    signal.addEventListener('abort', () => reject(Object.assign(new Error('timeout'), { name: 'AbortError' })));
  });
  await assert.rejects(() => sendForm('test', {}, { timeoutMs: 5, fetcher }), /demasiado/);
});
