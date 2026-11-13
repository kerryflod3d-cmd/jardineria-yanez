export class SubmissionError extends Error {
  constructor(message) { super(message); this.name = 'SubmissionError'; }
}

export function isFormSubmitSuccess(response, data) {
  return response.ok && (data?.success === true || data?.success === 'true');
}

export async function sendForm(action, values, { fetcher = fetch, timeoutMs = 15000 } = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetcher(action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(values),
      signal: controller.signal,
    });
    const result = await response.json().catch(() => null);
    if (!isFormSubmitSuccess(response, result)) {
      throw new SubmissionError('El proveedor no confirmó la recepción del mensaje.');
    }
    return result;
  } catch (error) {
    if (error?.name === 'AbortError') {
      throw new SubmissionError('La solicitud tardó demasiado. Comprueba tu conexión e inténtalo nuevamente.');
    }
    if (error instanceof SubmissionError) throw error;
    throw new SubmissionError('No se pudo completar el envío. Revisa tu conexión e inténtalo nuevamente.');
  } finally {
    clearTimeout(timeout);
  }
}
