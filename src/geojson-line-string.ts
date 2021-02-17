import type { FromSchema } from 'json-schema-to-ts';
import { position, randomPosition } from './geojson-common';

export const geoJSONLineString = {
  title: 'GeoJSON LineString',
  description: 'A GeoJSON geometry object whose coordinates member is an array of 2 or more positions.',
  type: 'object',
  properties: {
    type: { enum: ['LineString'] },
    coordinates: { type: 'array', items: position, minItems: 2 },
  },
  required: ['type', 'coordinates'],
  additionalProperties: false,
} as const;

export type GeoJSONLineString = FromSchema<typeof geoJSONLineString>;

export function randomGeoJSONLineString(): GeoJSONLineString {
  return {
    type: 'LineString',
    coordinates: [randomPosition(), randomPosition(), randomPosition()],
  };
}
