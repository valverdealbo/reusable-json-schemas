/* eslint-disable import/no-extraneous-dependencies,@typescript-eslint/ban-types,@typescript-eslint/no-explicit-any */
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import {
  $schema,
  address,
  countryCodeString,
  dateString,
  dateStringRange,
  datetimeString,
  datetimeStringRange,
  document,
  email,
  errorResponse,
  findAll,
  findById,
  geoJSONPoint,
  geoJSONMultiPoint,
  geoJSONLineString,
  geoJSONMultiLineString,
  geoJSONPolygon,
  geoJSONMultiPolygon,
  geolocation,
  limit,
  linearRing,
  money,
  objectIdString,
  passwordString,
  phone,
  position,
  skip,
  timeString,
  timeStringRange,
  timedGeolocation,
  timezoneString,
  usernameString,
  uuidString,
  randomAddress,
  randomCountryCodeString,
  randomDateString,
  randomDateStringRange,
  randomDatetimeString,
  randomDatetimeStringRange,
  randomDocument,
  randomEmail,
  randomFindAll,
  randomFindById,
  randomErrorResponse,
  randomGeoJSONPoint,
  randomGeoJSONMultiPoint,
  randomGeoJSONLineString,
  randomGeoJSONMultiLineString,
  randomGeoJSONPolygon,
  randomGeoJSONMultiPolygon,
  randomGeolocation,
  randomLimit,
  randomLinearRing,
  randomMoney,
  randomObjectIdString,
  randomPasswordString,
  randomPhone,
  randomPosition,
  randomSkip,
  randomTimeString,
  randomTimeStringRange,
  randomTimedGeolocation,
  randomTimezoneString,
  randomUsernameString,
  randomUuidString,
} from '.';

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
