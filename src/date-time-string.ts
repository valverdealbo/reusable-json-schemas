import Chance from 'chance';
import type { FromSchema } from 'json-schema-to-ts';

const chance = new Chance();

export const datetimeString = { type: 'string', format: 'date-time' } as const;

export type DatetimeString = FromSchema<typeof datetimeString>;

export function randomDatetimeString(): DatetimeString {
  return chance.date().toISOString();
}
