import type { FromSchema } from 'json-schema-to-ts';
import { geolocation } from './geolocation';
import { datetimeString, randomDatetimeString } from './date-time-string';
import { randomGeoJSONPoint } from './geojson-point';

export const timedGeolocation = {
  type: 'object',
  properties: {
    ...geolocation.properties,
    at: datetimeString,
  },
  required: [...geolocation.required, 'at'],
  additionalProperties: false,
} as const;

export type TimedGeolocation = FromSchema<typeof timedGeolocation>;

export function randomTimedGeolocation(partial?: Partial<TimedGeolocation>): TimedGeolocation {
  return {
    geometry: partial?.geometry ?? randomGeoJSONPoint(),
    precision: partial?.precision ?? 'unknown',
    at: partial?.at ?? randomDatetimeString(),
  };
}
