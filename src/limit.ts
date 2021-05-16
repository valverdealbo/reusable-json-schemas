import Chance from 'chance';
import type { FromSchema } from 'json-schema-to-ts';

const chance = new Chance();

export const limit = { type: 'integer', minimum: 1, maximum: 100, default: 100 } as const;

export type Limit = FromSchema<typeof limit>;

export function randomLimit(): Limit {
  return chance.integer({ min: 10, max: 100 });
}
