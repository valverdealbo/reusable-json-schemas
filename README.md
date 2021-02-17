# @valbo/reusable-json-schemas

Reusable JSON schemas with types and random data generators.

![npm (scoped)](https://img.shields.io/npm/v/@valbo/reusable-json-schemas)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Build Status](https://img.shields.io/github/workflow/status/valverdealbo/reusable-json-schemas/CI)
[![Coverage Status](https://coveralls.io/repos/github/valverdealbo/reusable-json-schemas/badge.svg?branch=main)](https://coveralls.io/github/valverdealbo/reusable-json-schemas?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/github/valverdealbo/reusable-json-schemas/badge.svg?targetFile=package.json)](https://snyk.io/test/github/valverdealbo/reusable-json-schemas?targetFile=package.json)

## Contents

- [Install](#install)
- [Usage](#usage)
  - [String schemas](#string-schemas)
  - [String tuple schemas](#string-tuple-schemas)
  - [GeoJSON schemas](#geojson-schemas)
  - [Object schemas](#object-schemas)
  - [Helpers for CRUD operations](#helpers-for-crud-operations)
- [Full example](#full-example)

## Install

```bash
npm install @valbo/reusable-json-schemas
```

## Usage

This package exports some JSON schemas that can be used as a base to create more complex schemas.

For each exported schema there is also a corresponding Typescript type (created using [json-schema-to-ts](https://github.com/ThomasAribart/json-schema-to-ts)) and a random data generation function.

The available schemas are:

### String schemas

#### $schema

A constant string with the JSON Schema draft 7 URI.

```JSON
"http://json-schema.org/draft-07/schema#"
```

#### dateString, DateString, randomDateString()

A string schema with the `date` format.

```JSON
"2021-02-13"
```

#### timeString, TimeString, randomTimeString()

A string with the `time` format. The random function does not produce milliseconds or timezone.

```JSON
"06:05:00"
```

#### datetimeString, DatetimeString, randomDatetimeString()

A string with the `date-time` format.

```JSON
"2021-01-13T06:05:00.000Z"
```

#### uuidString, UuidString, randomUuidString()

A string with the `uuid` format.

```JSON
"74141a5c-0213-4360-8051-2f6c9e29049e"
```

#### objectIdString, ObjectIdString, randomObjectIdString()

A MongoDB ObjectId as a hexadecimal string.

```JSON
"507f1f77bcf86cd799439011"
```

#### countryCodeString, CountryCodeString, randomCountryCodeString()

An enumeration of [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) alpha-2 country codes.

```JSON
"US"
```

#### timezoneString, TimezoneString, randomTimezoneString()

An enumeration of the [tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```JSON
"Europe/Madrid"
```

#### usernameString, UsernameString, randomUsernameString()

A string with a `^[a-zA-Z][a-zA-Z0-9\._\-]*$` regex pattern and minimum length 3.

```JSON
"axel23"
```

#### passwordString, PasswordString, randomPasswordString()

A string with a `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z]*$` regex pattern and minimum length 8.

```JSON
"weyJRW84"
```

### String tuple schemas

#### dateStringRange, DateStringRange, randomDateStringRange()

A 2-tuple of strings with the `date` format.

```JSON
["2021-01-15", "2021-02-13"]
```

#### timeStringRange, TimeStringRange, randomTimeStringRange()

A 2-tuple of strings with the `time` format.

```JSON
["06:05:00", "06:21:00"]
```

#### datetimeStringRange, DatetimeStringRange, randomDatetimeStringRange()

A 2-tuple of strings with the `date-time` format.

```JSON
["2021-01-15T06:05:00.000Z", "2021-02-13T06:21:00.000Z"]
```

### GeoJSON schemas

#### position, Position, randomPosition()

A 2-tuple with a longitude and latitude to build [coordinates](https://tools.ietf.org/html/rfc7946#section-3.1.1) members of GeoJSON objects.

```JSON
[2.175917, 41.410954]
```

#### linearRing, LinearRing, randomLinearRing()

A closed tuple of positions with at least 4 of them.

```JSON
[
  [2.175917, 41.410954],
  [2.122324, 41.384716],
  [2.177483, 41.377022],
  [2.175917, 41.410954]
]
```

#### geoJSONPoint, GeoJSONPoint, randomGeoJSONPoint()

A GeoJSON [Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object.

```JSON
{
  "type": "Point",
  "coordinates": [2.175917, 41.410954]
}
```

#### geoJSONMultiPoint, GeoJSONMultiPoint, randomGeoJSONMultiPoint()

A GeoJSON [MultiPoint](https://tools.ietf.org/html/rfc7946#section-3.1.3) geometry object.

```JSON
{
  "type": "MultiPoint",
  "coordinates": [
    [2.175917, 41.410954],
    [2.122324, 41.384716]
  ]
}
```

#### geoJSONLineString, GeoJSONLineString, randomGeoJSONLineString()

A GeoJSON [LineString](https://tools.ietf.org/html/rfc7946#section-3.1.4) geometry object.

```JSON
{
  "type": "LineString",
  "coordinates": [
    [2.175917, 41.410954],
    [2.122324, 41.384716]
  ]
}
```

#### geoJSONMultiLineString, GeoJSONMultiLineString, randomGeoJSONMultiLineString()

A GeoJSON [MultiLineString](https://tools.ietf.org/html/rfc7946#section-3.1.5) geometry object.

```JSON
{
  "type": "MultiLineString",
  "coordinates": [
    [
      [2.175917, 41.410954],
      [2.122324, 41.384716]
    ],
    [
      [2.177483, 41.377022],
      [2.175917, 41.410954]
    ]
  ]
}
```

#### geoJSONPolygon, GeoJSONPolygon, randomGeoJSONPolygon()

A GeoJSON [Polygon](https://tools.ietf.org/html/rfc7946#section-3.1.6) geometry object.

```JSON
{
  "type": "Polygon",
  "coordinates": [
    [
      [2.175917, 41.410954],
      [2.122324, 41.384716],
      [2.177483, 41.377022],
      [2.175917, 41.410954]
    ]
  ]
}
```

#### geoJSONMultiPolygon, GeoJSONMultiPolygon, randomGeoJSONMultiPolygon()

A GeoJSON [MultiPolygon](https://tools.ietf.org/html/rfc7946#section-3.1.7) geometry object.

```JSON
{
  "type": "MultiPolygon",
  "coordinates": [
    [
      [
        [2.175917, 41.410954],
        [2.122324, 41.384716],
        [2.177483, 41.377022],
        [2.175917, 41.410954]
      ]
    ],
    [
      [
        
        [-3.692731, 40.416569],
        [-3.688316, 40.454784],
        [-3.714438, 40.420152],
        [-3.692731, 40.416569]
      ]
    ]
  ]
}
```

### Object schemas

#### email, Email, randomEmail()

An object with a label and an email address.

```JSON
{
  "label": "work",
  "address": "example@example.com"
}
```

#### phone, Phone, randomPhone()

An object with a label and a phone number.

```JSON
{
  "label": "work",
  "number": "(555) 927-2152"
}
```

#### money, Money, randomMoney()

An object with a currency ([ISO 4217 alpha code](https://en.wikipedia.org/wiki/ISO_4217)) and an amount in the currency minor unit (e.g. cents) to avoid rounding errors.

```JSON
{
  "currency": "EUR",
  "amount": 1650
}
```

#### geolocation, Geolocation, randomGeolocation()

An object with a GeoJSONPoint and a geocoding precision.

```JSON
{
  "geometry": {
    "type": "Point",
    "coordinates": [2.175917, 41.410954]
  },
  "precision": "rooftop"
}
```

#### timedGeolocation, TimedGeolocation, randomTimedGeolocation()

Same as above with an additional timestamp.

```JSON
{
  "geometry": {
    "type": "Point",
    "coordinates": [2.175917, 41.410954]
  },
  "precision": "rooftop",
  "at": "2021-02-13T06:48:00.000Z"
}
```

#### address, Address, randomAddress()

An object with a street, postal code, locality, country, etc.

```JSON
{
  "street": "536 Zokpu Court",
  "door": "K",
  "postalCode": "09515",
  "locality": "Teudore",
  "administrativeArea": "AL",
  "country": "US",
  "geolocation": {
    "geometry": {
      "type": "Point", 
      "coordinates": [-177.8456, -13.77895]
    },
    "precision": "unknown"
  },
  "notes": "Bic etu sucfo taunavoj zoslurci tazdonej efuispup efej saj pol tavakado de urapusuk emaoni hu afidajsi to busdowif.",
  "placeId": "APA91fto-QJ3CqCcPVzspY8xVcDFb6rSQf1IqZln__EOCmpukH7UczZMWtFRq1lGklEf_i_z7zMNG6ny3MbnBSk2poTkVnDNVCU4Drm0NmNS9OgChZARboFmJDT2v5jc2fIw5xK12AasOwyv5uUafLIlBjw5VsJ3pCAL68CAwjiwLDGi6NPIbVU"
}
```

#### errorResponse, ErrorResponse, randomErrorResponse()

An object to return HTTP errors from an API.

```JSON
{
  "error": {
    "status": "400",
    "name": "BadRequest",
    "message": "The request could not be fulfilled due to the incorrect syntax of the request."
  }
}
```

#### document, Document, randomDocument()

An object to use as base for MongoDB documents.

```JSON
{
  "_id": "3bc50ffb-0e79-4d36-af6d-7d9db3afe253",
  "createdAt": "2021-02-13T07:02:30.000Z",
  "updatedAt": "2021-02-13T07:02:30.000Z",
  "deletable": true
}
```

### Helpers for CRUD operations

#### skip, Skip, randomSkip()

A non-negative number which defaults to 0. Used to paginate results.

#### limit, Limit, randomLimit()

A number between 1 and 100 which defaults to 100. Used to paginate results.

#### findAll, FindAll, randomFindAll()

A filter to find all results.

```JSON
{
  "all": true
}
```

#### findById, FindById, randomFindById()

A filter to find an exact result by _id.

```JSON
{
  "_id": "7104984d-6330-4083-a9eb-1e8dc524cbc5"
}
```

## Full example

The following example shows how to create a User schema and API requests and responses for CRUD operations.

```typescript
import type { FromSchema } from 'json-schema-to-ts';
import Chance from 'chance';
import {
  $schema,
  uuidString,
  email,
  phone,
  document,
  skip,
  limit,
  findAll,
  findById,
  randomEmail,
  randomPhone,
  randomDocument,
} from '@valbo/reusable-json-schemas';

export const user = {
  $schema,
  $id: 'user',
  title: 'user',
  type: 'object',
  properties: {
    ...document.properties,
    name: { type: 'string' },
    email,
    phone,
    notes: { type: 'string' },
  },
  required: [...document.required, 'name'],
  additionalProperties: false,
} as const;

const { _id, name, notes } = user.properties;

export const createUserRequest = {
  $schema,
  $id: 'createUserRequest',
  type: 'object',
  properties: {
    create: {
      type: 'object',
      properties: { _id, name, email, phone, notes },
      required: ['name'],
      additionalProperties: false,
    },
  },
  required: ['create'],
  additionalProperties: false,
} as const;

export const createUserResponse = {
  $schema,
  $id: 'createUserResponse',
  type: 'object',
  properties: { created: user },
  required: ['created'],
  additionalProperties: false,
} as const;

export const findUsersRequest = {
  $schema,
  $id: 'findUsersRequest',
  type: 'object',
  properties: {
    find: { oneOf: [findAll, findById] },
    skip,
    limit,
  },
  required: ['find'],
  additionalProperties: false,
} as const;

export const findUsersResponse = {
  $schema,
  type: 'object',
  $id: 'findUsersRequest',
  properties: { found: { type: 'array', items: user } },
  required: ['found'],
  additionalProperties: false,
} as const;

export const unset = { type: 'boolean', enum: [true] } as const;

export const updateUserRequest = {
  $schema,
  $id: 'updateUserRequest',
  type: 'object',
  properties: {
    find: findById,
    set: {
      type: 'object',
      properties: { name, email, phone, notes },
      additionalProperties: false,
    },
    unset: {
      type: 'object',
      properties: { email: unset, phone: unset, notes: unset },
      additionalProperties: false,
    },
  },
  required: ['find'],
  additionalProperties: false,
} as const;

export const updateUserResponse = {
  $schema,
  $id: 'updateUserResponse',
  type: 'object',
  properties: { updated: user },
  required: ['updated'],
  additionalProperties: false,
} as const;

export const deleteUserRequest = {
  $schema,
  $id: 'deleteUserRequest',
  type: 'object',
  properties: { delete: findById },
  required: ['delete'],
  additionalProperties: false,
} as const;

export const deleteUserResponse = {
  $schema,
  $id: 'deleteUserResponse',
  type: 'object',
  properties: { deleted: user },
  required: ['deleted'],
  additionalProperties: false,
} as const;

export type User = FromSchema<typeof user>;
export type CreateUserRequest = FromSchema<typeof createUserRequest>;
export type CreateUserResponse = FromSchema<typeof createUserResponse>;
export type FindUsersRequest = FromSchema<typeof findUsersRequest>;
export type FindUsersResponse = FromSchema<typeof findUsersResponse>;
export type Unset = FromSchema<typeof unset>;
export type UpdateUserRequest = FromSchema<typeof updateUserRequest>;
export type UpdateUserResponse = FromSchema<typeof updateUserResponse>;
export type DeleteUserRequest = FromSchema<typeof deleteUserRequest>;
export type DeleteUserResponse = FromSchema<typeof deleteUserResponse>;

const chance = new Chance();

export function randomUser(partial?: Partial<User>): User {
  return {
    ...randomDocument(partial),
    name: partial?.name ?? chance.name(),
    email: partial?.email ?? randomEmail(),
    phone: partial?.phone ?? randomPhone(),
    notes: partial?.notes ?? chance.sentence(),
  }
}
```

