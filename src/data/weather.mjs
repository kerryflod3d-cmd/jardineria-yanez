// Coordenadas de referencia de cada localidad; las cifras son pronósticos de modelo, no lecturas de una estación.
// Ninguna temperatura se extrapola de otra comuna.
export const weatherLocations = Object.freeze([
  { id: 'retiro', name: 'Retiro', lat: -36.053, lon: -71.773 },
  { id: 'copihue', name: 'Copihue', lat: -36.075554, lon: -71.758055 },
  { id: 'parral', name: 'Parral', lat: -36.15, lon: -71.83333 },
  { id: 'longavi', name: 'Longaví', lat: -35.9667, lon: -71.6833 },
  { id: 'linares', name: 'Linares', lat: -35.8454, lon: -71.5979 },
]);

export const WEATHER_CACHE_MS = 3 * 60 * 60 * 1000;

export function forecastIcon(symbol = '') {
  if (/thunder/.test(symbol)) return '⛈️';
  if (/snow|sleet/.test(symbol)) return '❄️';
  if (/rain|drizzle/.test(symbol)) return '🌧️';
  if (/fog/.test(symbol)) return '🌫️';
  if (/cloudy/.test(symbol) && /partly/.test(symbol)) return '⛅';
  if (/cloudy/.test(symbol)) return '☁️';
  if (/clearsky/.test(symbol) && /night/.test(symbol)) return '🌙';
  return '☀️';
}

export function parseForecast(payload) {
  const period = payload?.properties?.timeseries?.[0];
  const temperature = period?.data?.instant?.details?.air_temperature;
  if (typeof temperature !== 'number' || !Number.isFinite(temperature)) throw Error('Pronóstico no disponible');
  const symbol = period?.data?.next_1_hours?.summary?.symbol_code ?? period?.data?.next_6_hours?.summary?.symbol_code ?? '';
  return { temperature: Math.round(temperature), symbol: forecastIcon(symbol) };
}
