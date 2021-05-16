import Chance from 'chance';
import type { FromSchema } from 'json-schema-to-ts';

const chance = new Chance();

export const position = { type: 'array', items: [{ type: 'number' }, { type: 'number' }], minItems: 2, maxItems: 2 } as const;

export type Position = FromSchema<typeof position>;

export function randomPosition(): Position {
  return [chance.longitude(), chance.latitude()];
}

export const linearRing = { type: 'array', items: position, minItems: 4 } as const;

export type LinearRing = FromSchema<typeof linearRing>;

export function randomLinearRing(): LinearRing {
  const south = chance.latitude({ max: 89.0 });
  const north = chance.latitude({ min: south + 0.00001, max: south + 1.0 });
  const west = chance.longitude({ max: -179.0 });
  const east = chance.longitude({ min: west + 0.00001, max: west + 1.0 });
  return [
    [east, north],
    [west, north],
    [west, south],
    [east, south],
    [east, north],
  ];
}
