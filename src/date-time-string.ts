import type { FromSchema } from 'json-schema-to-ts';
import Chance from 'chance';

const chance = new Chance();

export const datetimeString = { type: 'string', format: 'date-time' } as const;

export type DatetimeString = FromSchema<typeof datetimeString>;

export function randomDatetimeString(): DatetimeString {
  return chance.date().toISOString();
}
