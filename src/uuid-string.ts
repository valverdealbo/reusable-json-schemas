import type { FromSchema } from 'json-schema-to-ts';
import * as uuid from 'uuid';

export const uuidString = { type: 'string', format: 'uuid' } as const;

export type UuidString = FromSchema<typeof uuidString>;

export function randomUuidString(): UuidString {
  return uuid.v4();
}
