/* eslint-disable import/no-extraneous-dependencies,@typescript-eslint/ban-types,@typescript-eslint/no-explicit-any */
// noinspection ES6PreferShortImport

import Ajv from 'ajv';
import addFormats from 'ajv-formats';

import { $schema } from '../src/$schema';
import { address, randomAddress } from '../src/address';
import { countryCodeString, randomCountryCodeString } from '../src/country-code-string';
import { dateString, randomDateString } from '../src/date-string';
import { dateStringRange, randomDateStringRange } from '../src/date-string-range';
import { datetimeString, randomDatetimeString } from '../src/date-time-string';
import { datetimeStringRange, randomDatetimeStringRange } from '../src/date-time-string-range';
import { document, randomDocument } from '../src/document';
import { email, randomEmail } from '../src/email';
import { errorResponse, randomErrorResponse } from '../src/error-response';
import { findAll, randomFindAll } from '../src/find-all';
import { findById, randomFindById } from '../src/find-by-id';
import { position, randomPosition, linearRing, randomLinearRing } from '../src/geojson-common';
import { geoJSONPoint, randomGeoJSONPoint } from '../src/geojson-point';
import { geoJSONMultiPoint, randomGeoJSONMultiPoint } from '../src/geojson-multi-point';
import { geoJSONLineString, randomGeoJSONLineString } from '../src/geojson-line-string';
import { geoJSONMultiLineString, randomGeoJSONMultiLineString } from '../src/geojson-multi-line-string';
import { geoJSONPolygon, randomGeoJSONPolygon } from '../src/geojson-polygon';
import { geoJSONMultiPolygon, randomGeoJSONMultiPolygon } from '../src/geojson-multi-polygon';
import { geolocation, randomGeolocation } from '../src/geolocation';
import { limit, randomLimit } from '../src/limit';
import { money, randomMoney } from '../src/money';
import { objectIdString, randomObjectIdString } from '../src/object-id-string';
import { passwordString, randomPasswordString } from '../src/password-string';
import { phone, randomPhone } from '../src/phone';
import { skip, randomSkip } from '../src/skip';
import { timeString, randomTimeString } from '../src/time-string';
import { timeStringRange, randomTimeStringRange } from '../src/time-string-range';
import { timedGeolocation, randomTimedGeolocation } from '../src/timed-geolocation';
import { timezoneString, randomTimezoneString } from '../src/timezone-string';
import { usernameString, randomUsernameString } from '../src/username-string';
import { uuidString, randomUuidString } from '../src/uuid-string';

const ajv = new Ajv({ strictTuples: false });
addFormats(ajv);

test('$schema should be the JSON Schema 7.0 draft name', () => {
  expect($schema).toBe('http://json-schema.org/draft-07/schema#');
});

const validationTable: [string, object, () => any][] = [
  ['address', address, randomAddress],
  ['countryCodeString', countryCodeString, randomCountryCodeString],
  ['dateString', dateString, randomDateString],
  ['dateStringRange', dateStringRange, randomDateStringRange],
  ['datetimeString', datetimeString, randomDatetimeString],
  ['datetimeStringRange', datetimeStringRange, randomDatetimeStringRange],
  ['document', document, randomDocument],
  ['email', email, randomEmail],
  ['errorResponse', errorResponse, randomErrorResponse],
  ['findAll', findAll, randomFindAll],
  ['findById', findById, randomFindById],
  ['geoJSONPoint', geoJSONPoint, randomGeoJSONPoint],
  ['geoJSONMultiPoint', geoJSONMultiPoint, randomGeoJSONMultiPoint],
  ['geoJSONLineString', geoJSONLineString, randomGeoJSONLineString],
  ['geoJSONMultiLineString', geoJSONMultiLineString, randomGeoJSONMultiLineString],
  ['geoJSONPolygon', geoJSONPolygon, randomGeoJSONPolygon],
  ['geoJSONMultiPolygon', geoJSONMultiPolygon, randomGeoJSONMultiPolygon],
  ['geolocation', geolocation, randomGeolocation],
  ['limit', limit, randomLimit],
  ['linearRing', linearRing, randomLinearRing],
  ['money', money, randomMoney],
  ['objectIdString', objectIdString, randomObjectIdString],
  ['passwordString', passwordString, randomPasswordString],
  ['phone', phone, randomPhone],
  ['position', position, randomPosition],
  ['skip', skip, randomSkip],
  ['timeString', timeString, randomTimeString],
  ['timeStringRange', timeStringRange, randomTimeStringRange],
  ['timedGeolocation', timedGeolocation, randomTimedGeolocation],
  ['timezoneString', timezoneString, randomTimezoneString],
  ['usernameString', usernameString, randomUsernameString],
  ['uuidString', uuidString, randomUuidString],
];

test.each(validationTable)('%s schema should validate data', (name, schema, random) => {
  const data = random();
  ajv.validate(schema, data);
  expect(ajv.errors).toBeNull();
});

const sameAsPartialTable: [string, object, (partial?: any) => any][] = [
  ['address', address, randomAddress],
  ['document', document, randomDocument],
  ['email', email, randomEmail],
  ['errorResponse', errorResponse, randomErrorResponse],
  ['geolocation', geolocation, randomGeolocation],
  ['money', money, randomMoney],
  ['phone', phone, randomPhone],
  ['timedGeolocation', timedGeolocation, randomTimedGeolocation],
];

test.each(sameAsPartialTable)('%s random should use the partial', (name, schema, random) => {
  const partial = random();
  const data = random(partial);
  expect(data).toEqual(partial);
});
