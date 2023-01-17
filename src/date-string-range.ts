import Chance from 'chance';
import addDays from 'date-fns/addDays';
import format from 'date-fns/format';
import type { FromSchema } from 'json-schema-to-ts';
import { dateString } from './date-string';
import { DatetimeStringRange } from './date-time-string-range';

const chance = new Chance();

export const dateStringRange = { type: 'array', items: dateString, minItems: 2, maxItems: 2 } as const;

export type DateStringRange = FromSchema<typeof dateStringRange>;

export function randomDateStringRange(): DatetimeStringRange {
  const from = chance.date();
  const to = addDays(from, chance.integer({ min: 1, max: 365 }));
  return [format(from, 'yyyy-MM-dd'), format(to, 'yyyy-MM-dd')];
}
