export function buildWhatsAppInquiry({ name, service, message }) {
  const cleanName = String(name ?? '').replace(/\s+/g, ' ').trim();
  const cleanService = String(service ?? '').trim();
  const cleanMessage = String(message ?? '').trim();

  if (!cleanName || !cleanService || !cleanMessage) {
    throw new TypeError('Completa tu nombre, el servicio y la consulta.');
  }

  return `Hola, soy ${cleanName}.\nServicio: ${cleanService}\nConsulta: ${cleanMessage}`;
}
