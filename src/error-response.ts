import type { FromSchema } from 'json-schema-to-ts';
import Chance from 'chance';
import statuses from 'statuses';

const chance = new Chance();

export const errorResponse = {
  type: 'object',
  properties: {
    error: {
      type: 'object',
      properties: {
        status: { type: 'integer', description: 'HTTP status code of the response, like 400, 500, etc' },
        name: { type: 'string', minLength: 1, description: 'The name of the error, like UnauthorizedError or NotFoundError' },
        message: { type: 'string', minLength: 1 },
      },
      required: ['status', 'name', 'message'],
      additionalProperties: false,
    },
  },
  required: ['error'],
  additionalProperties: false,
} as const;

export type ErrorResponse = FromSchema<typeof errorResponse>;

export function randomErrorResponse(partial?: Partial<ErrorResponse>): ErrorResponse {
  const code = chance.pickone(statuses.codes);
  const message = statuses.message[code] as string;
  return {
    error: {
      status: partial?.error?.status ?? code,
      name: partial?.error?.name ?? message,
      message: partial?.error?.message ?? message,
    },
  };
}
