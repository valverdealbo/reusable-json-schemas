import type { FromSchema } from 'json-schema-to-ts';
import { position, randomPosition } from './geojson-common';

export const geoJSONPoint = {
  title: 'GeoJSON Point',
  description: 'A GeoJSON geometry object whose coordinates member is a single position.',
  type: 'object',
  properties: {
    type: { type: 'string', enum: ['Point'] },
    coordinates: position,
  },
  required: ['type', 'coordinates'],
  additionalProperties: false,
} as const;

export type GeoJSONPoint = FromSchema<typeof geoJSONPoint>;

export function randomGeoJSONPoint(): GeoJSONPoint {
  return {
    type: 'Point',
    coordinates: randomPosition(),
  };
}
