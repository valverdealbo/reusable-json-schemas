import type { FromSchema } from 'json-schema-to-ts';
import Chance from 'chance';
import formatRFC3339 from 'date-fns/formatRFC3339';

const chance = new Chance();

export const datetimeString = { type: 'string', format: 'date-time' } as const;

export type DatetimeString = FromSchema<typeof datetimeString>;

export function randomDatetimeString(): DatetimeString {
  return formatRFC3339(chance.date(), { fractionDigits: 3 });
}
