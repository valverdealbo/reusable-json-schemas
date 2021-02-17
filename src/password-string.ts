import type { FromSchema } from 'json-schema-to-ts';
import Chance from 'chance';

const chance = new Chance();

export const passwordString = {
  type: 'string',
  minLength: 8,
  pattern: '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z]*$',
  description: 'a combination of lower case, upper case and numbers',
} as const;

export type PasswordString = FromSchema<typeof passwordString>;

export function randomPasswordString(): PasswordString {
  const lower = chance.string({ length: 3, alpha: true, casing: 'lower' });
  const upper = chance.string({ length: 3, alpha: true, casing: 'upper' });
  const numeric = chance.string({ length: 2, numeric: true });
  return `${lower}${upper}${numeric}`;
}
