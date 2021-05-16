import type { FromSchema } from 'json-schema-to-ts';
import { position, randomPosition } from './geojson-common';

export const geoJSONMultiPoint = {
  title: 'GeoJSON MultiPoint',
  description: 'A GeoJSON geometry object whose coordinates member is an array of positions',
  type: 'object',
  properties: {
    type: { type: 'string', enum: ['MultiPoint'] },
    coordinates: { type: 'array', items: position },
  },
  required: ['type', 'coordinates'],
  additionalProperties: false,
} as const;

export type GeoJSONMultiPoint = FromSchema<typeof geoJSONMultiPoint>;

export function randomGeoJSONMultiPoint(): GeoJSONMultiPoint {
  return {
    type: 'MultiPoint',
    coordinates: [randomPosition(), randomPosition(), randomPosition()],
  };
}
