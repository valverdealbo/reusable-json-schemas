import type { FromSchema } from 'json-schema-to-ts';
import { geoJSONLineString } from './geojson-line-string';
import { randomPosition } from './geojson-common';

export const geoJSONMultiLineString = {
  title: 'GeoJSON MultiLineString',
  description: 'A GeoJSON geometry object whose coordinates member is an array of LineString coordinate arrays',
  type: 'object',
  properties: {
    type: { type: 'string', enum: ['MultiLineString'] },
    coordinates: { type: 'array', items: geoJSONLineString.properties.coordinates },
  },
  required: ['type', 'coordinates'],
  additionalProperties: false,
} as const;

export type GeoJSONMultiLineString = FromSchema<typeof geoJSONMultiLineString>;

export function randomGeoJSONMultiLineString(): GeoJSONMultiLineString {
  return {
    type: 'MultiLineString',
    coordinates: [
      [randomPosition(), randomPosition(), randomPosition()],
      [randomPosition(), randomPosition(), randomPosition()],
    ],
  };
}
