import type { FromSchema } from 'json-schema-to-ts';
import { linearRing, randomLinearRing } from './geojson-common';

export const geoJSONMultiPolygon = {
  title: 'GeoJSON MultiPolygon',
  description: 'A GeoJSON geometry object whose coordinates member is an array of Polygon coordinate arrays.',
  type: 'object',
  properties: {
    type: { type: 'string', enum: ['MultiPolygon'] },
    coordinates: { type: 'array', items: { type: 'array', items: linearRing } },
  },
  required: ['type', 'coordinates'],
  additionalProperties: false,
} as const;

export type GeoJSONMultiPolygon = FromSchema<typeof geoJSONMultiPolygon>;

export function randomGeoJSONMultiPolygon(): GeoJSONMultiPolygon {
  return {
    type: 'MultiPolygon',
    coordinates: [[randomLinearRing()], [randomLinearRing()]],
  };
}
