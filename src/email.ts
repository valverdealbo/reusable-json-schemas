import type { FromSchema } from 'json-schema-to-ts';
import Chance from 'chance';

const chance = new Chance();

export const email = {
  type: 'object',
  properties: {
    label: { type: 'string', minLength: 1 },
    address: { type: 'string', format: 'email' },
  },
  required: ['label', 'address'],
  additionalProperties: false,
} as const;

export type Email = FromSchema<typeof email>;

export function randomEmail(partial?: Partial<Email>): Email {
  return {
    label: partial?.label ?? chance.profession(),
    address: partial?.address ?? chance.email(),
  };
}
