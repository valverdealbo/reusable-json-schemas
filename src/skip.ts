import Chance from 'chance';
import type { FromSchema } from 'json-schema-to-ts';

const chance = new Chance();

export const skip = { type: 'integer', minimum: 0, default: 0 } as const;

export type Skip = FromSchema<typeof skip>;

export function randomSkip(): Skip {
  return chance.integer({ min: 0, max: 10 });
}
