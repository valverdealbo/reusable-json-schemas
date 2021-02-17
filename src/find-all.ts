import type { FromSchema } from 'json-schema-to-ts';

export const findAll = {
  title: 'find all',
  type: 'object',
  properties: { all: true },
  required: ['all'],
  additionalProperties: false,
} as const;

export type FindAll = FromSchema<typeof findAll>;

export function randomFindAll(): FindAll {
  return { all: true };
}
