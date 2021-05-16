import Chance from 'chance';
import type { FromSchema } from 'json-schema-to-ts';

const chance = new Chance();

export const usernameString = {
  type: 'string',
  pattern: '^[a-zA-Z][a-zA-Z0-9\\._\\-]*$',
  minLength: 3,
} as const;

export type UsernameString = FromSchema<typeof usernameString>;

export function randomUsernameString(): UsernameString {
  const lower = chance.string({ length: 4, alpha: true, casing: 'lower' });
  const numeric = chance.string({ length: 2, numeric: true });
  return `${lower}${numeric}`;
}
