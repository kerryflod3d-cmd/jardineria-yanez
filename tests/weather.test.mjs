import test from 'node:test';
import assert from 'node:assert/strict';
import { weatherLocations, parseForecast, forecastIcon, WEATHER_CACHE_MS } from '../src/data/weather.mjs';

test('cinco localidades originales, cada una con coordenadas individuales', () => {
  assert.deepEqual(weatherLocations.map(p => p.name), ['Retiro','Copihue','Parral','Longaví','Linares']);
  assert.equal(new Set(weatherLocations.map(p => `${p.lat},${p.lon}`)).size, 5);
  assert.ok(weatherLocations.every(p => p.lat < -35 && p.lat > -37 && p.lon < -71 && p.lon > -72));
  assert.equal(WEATHER_CACHE_MS, 10800000);
});

test('temperaturas sin ajustes artificiales y símbolos de estado', () => {
  const sample = { properties: { timeseries: [{ data: { instant: { details: { air_temperature: 18.6 } }, next_1_hours: { summary: { symbol_code: 'partlycloudy_day' } } } }] } };
  assert.deepEqual(parseForecast(sample), {temperature:19, symbol:'⛅'});
  assert.equal(forecastIcon('clearsky_night'),'🌙');
  assert.throws(() => parseForecast({}), /Pronóstico/);
});
