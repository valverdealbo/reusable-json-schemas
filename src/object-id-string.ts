import Chance from 'chance';
import type { FromSchema } from 'json-schema-to-ts';

const chance = new Chance();

export const objectIdString = { type: 'string', pattern: '^[0-9a-fA-F]{24}$' } as const;

export type ObjectIdString = FromSchema<typeof objectIdString>;

export function randomObjectIdString(): ObjectIdString {
  return chance.hash({ length: 24 });
}
