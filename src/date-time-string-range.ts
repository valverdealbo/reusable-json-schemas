import Chance from 'chance';
import addDays from 'date-fns/addDays';
import type { FromSchema } from 'json-schema-to-ts';
import { datetimeString } from './date-time-string';

const chance = new Chance();

export const datetimeStringRange = { type: 'array', items: [datetimeString, datetimeString], minItems: 2, maxItems: 2 } as const;

export type DatetimeStringRange = FromSchema<typeof datetimeStringRange>;

export function randomDatetimeStringRange(): DatetimeStringRange {
  const from = chance.date();
  const to = addDays(from, chance.integer({ min: 1, max: 365 }));
  return [from.toISOString(), to.toISOString()];
}
