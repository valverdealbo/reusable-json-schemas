import type { FromSchema } from 'json-schema-to-ts';
import Chance from 'chance';
import format from 'date-fns/format';

const chance = new Chance();

export const timeString = { type: 'string', format: 'time' } as const;

export type TimeString = FromSchema<typeof timeString>;

export function randomTimeString(): TimeString {
  return format(chance.date(), 'HH:mm:ss');
}
