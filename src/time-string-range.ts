import Chance from 'chance';
import format from 'date-fns/format';
import min from 'date-fns/min';
import max from 'date-fns/max';
import type { FromSchema } from 'json-schema-to-ts';
import { timeString } from './time-string';

const chance = new Chance();

export const timeStringRange = { type: 'array', items: [timeString, timeString], minItems: 2, maxItems: 2 } as const;

export type TimeStringRange = FromSchema<typeof timeStringRange>;

export function randomTimeStringRange(): TimeStringRange {
  const dateOne = chance.date({ year: 2000, month: 0, day: 1 }) as Date;
  const dateTwo = chance.date({ year: 2000, month: 0, day: 1 }) as Date;
  const from = format(min([dateOne, dateTwo]), 'HH:mm:ss');
  const to = format(max([dateOne, dateTwo]), 'HH:mm:ss');
  return [from, to];
}
