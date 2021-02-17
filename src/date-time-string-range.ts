import type { FromSchema } from 'json-schema-to-ts';
import Chance from 'chance';
import formatRFC3339 from 'date-fns/formatRFC3339';
import addDays from 'date-fns/addDays';
import { datetimeString } from './date-time-string';

const chance = new Chance();

export const datetimeStringRange = { type: 'array', items: [datetimeString, datetimeString], minItems: 2, maxItems: 2 } as const;

export type DatetimeStringRange = FromSchema<typeof datetimeStringRange>;

export function randomDatetimeStringRange(): DatetimeStringRange {
  const from = chance.date();
  const to = addDays(from, chance.integer({ min: 1, max: 365 }));
  return [formatRFC3339(from, { fractionDigits: 3 }), formatRFC3339(to, { fractionDigits: 3 })];
}
