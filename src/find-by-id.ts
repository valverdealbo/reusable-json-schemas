import type { FromSchema } from 'json-schema-to-ts';
import { randomUuidString, uuidString } from './uuid-string';

export const findById = {
  title: 'find by _id',
  type: 'object',
  properties: { _id: uuidString },
  required: ['_id'],
  additionalProperties: false,
} as const;

export type FindById = FromSchema<typeof findById>;

export function randomFindById(): FindById {
  return { _id: randomUuidString() };
}
