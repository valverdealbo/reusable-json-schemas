import type { FromSchema } from 'json-schema-to-ts';
import { linearRing, randomLinearRing } from './geojson-common';

export const geoJSONPolygon = {
  title: 'GeoJSON Polygon',
  description:
    'A GeoJSON geometry object whose coordinates member is an array of LinearRing coordinate arrays (a closed LineString with 4 or more positions where the first and last positions are equivalent). For Polygons with multiple rings, the first must be the exterior ring and any others must be interior rings or holes.',
  type: 'object',
  properties: {
    type: { type: 'string', enum: ['Polygon'] },
    coordinates: { type: 'array', items: linearRing },
  },
  required: ['type', 'coordinates'],
  additionalProperties: false,
} as const;

export type GeoJSONPolygon = FromSchema<typeof geoJSONPolygon>;

export function randomGeoJSONPolygon(): GeoJSONPolygon {
  return {
    type: 'Polygon',
    coordinates: [randomLinearRing()],
  };
}
