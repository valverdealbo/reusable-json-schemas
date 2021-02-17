import type { FromSchema } from 'json-schema-to-ts';
import Chance from 'chance';
import format from 'date-fns/format';

const chance = new Chance();

export const dateString = { type: 'string', format: 'date' } as const;

export type DateString = FromSchema<typeof dateString>;

export function randomDateString(): DateString {
  return format(chance.date(), 'yyyy-MM-dd');
}
