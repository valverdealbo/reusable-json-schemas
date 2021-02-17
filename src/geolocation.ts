import type { FromSchema } from 'json-schema-to-ts';
import { geoJSONPoint, randomGeoJSONPoint } from './geojson-point';

export const geolocation = {
  type: 'object',
  properties: {
    geometry: geoJSONPoint,
    precision: {
      type: 'string',
      enum: ['rooftop', 'rangeInterpolated', 'geometricCenter', 'approximate', 'unknown'],
    },
  },
  required: ['geometry', 'precision'],
  additionalProperties: false,
} as const;

export type Geolocation = FromSchema<typeof geolocation>;

export function randomGeolocation(partial?: Partial<Geolocation>): Geolocation {
  return {
    geometry: partial?.geometry ?? randomGeoJSONPoint(),
    precision: partial?.precision ?? 'unknown',
  };
}
