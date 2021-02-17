import type { FromSchema } from 'json-schema-to-ts';
import { uuidString, randomUuidString } from './uuid-string';
import { datetimeString, randomDatetimeString } from './date-time-string';

export const document = {
  type: 'object',
  properties: {
    _id: uuidString,
    createdAt: datetimeString,
    updatedAt: datetimeString,
    deletable: { type: 'boolean' },
  },
  required: ['_id', 'createdAt', 'updatedAt', 'deletable'],
  additionalProperties: false,
} as const;

export type Document = FromSchema<typeof document>;

export function randomDocument(partial?: Partial<Document>): Document {
  const at = randomDatetimeString();
  return {
    _id: partial?._id ?? randomUuidString(),
    createdAt: partial?.createdAt ?? at,
    updatedAt: partial?.updatedAt ?? at,
    deletable: partial?.deletable ?? true,
  };
}
