import * as uuid from 'uuid';
import type { FromSchema } from 'json-schema-to-ts';

export const uuidString = { type: 'string', format: 'uuid' } as const;

export type UuidString = FromSchema<typeof uuidString>;

export function randomUuidString(): UuidString {
  return uuid.v4();
}
