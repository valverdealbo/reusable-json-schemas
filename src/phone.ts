import type { FromSchema } from 'json-schema-to-ts';
import Chance from 'chance';

const chance = new Chance();

export const phone = {
  type: 'object',
  properties: {
    label: { type: 'string' },
    number: { type: 'string' },
  },
  required: ['label', 'number'],
  additionalProperties: false,
} as const;

export type Phone = FromSchema<typeof phone>;

export function randomPhone(partial?: Partial<Phone>): Phone {
  return {
    label: partial?.label ?? chance.profession(),
    number: partial?.number ?? chance.phone({ formatted: false }),
  };
}
