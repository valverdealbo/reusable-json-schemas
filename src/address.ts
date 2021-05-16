import type { FromSchema } from 'json-schema-to-ts';
import Chance from 'chance';
import { countryCodeString, randomCountryCodeString } from './country-code-string';
import { geolocation, randomGeolocation } from './geolocation';

const chance = new Chance();

export const address = {
  type: 'object',
  properties: {
    street: { type: 'string', minLength: 1 },
    door: { type: 'string', minLength: 1 },
    postalCode: { type: 'string', minLength: 1 },
    locality: { type: 'string', minLength: 1 },
    administrativeArea: { type: 'string', minLength: 1 },
    country: countryCodeString,
    geolocation,
    notes: { type: 'string', minLength: 1 },
    placeId: { type: 'string', minLength: 1, description: 'Google Maps Place ID' },
  },
  required: ['street', 'postalCode', 'locality', 'country'],
  additionalProperties: false,
} as const;

export type Address = FromSchema<typeof address>;

export function randomAddress(partial?: Partial<Address>): Address {
  return {
    street: partial?.street ?? chance.address(),
    door: partial?.door ?? chance.character({ alpha: true, casing: 'upper' }),
    postalCode: partial?.postalCode ?? chance.zip(),
    locality: partial?.locality ?? chance.city(),
    administrativeArea: partial?.administrativeArea ?? chance.state(),
    country: partial?.country ?? randomCountryCodeString(),
    geolocation: partial?.geolocation ?? randomGeolocation(),
    notes: partial?.notes ?? chance.sentence(),
    placeId: partial?.placeId ?? chance.android_id(),
  };
}
