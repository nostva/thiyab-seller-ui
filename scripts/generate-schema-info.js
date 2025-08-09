import fs from 'fs'
import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  isEnumType,
  isInputObjectType,
  isObjectType,
  isScalarType,
  getIntrospectionQuery,
  buildClientSchema,
} from 'graphql'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function getTypeInfo(type) {
  let nullable = true
  let list = false
  let isPaginatedList = false

  // Unwrap NonNull
  if (type instanceof GraphQLNonNull) {
    nullable = false
    type = type.ofType
  }

  // Unwrap List
  if (type instanceof GraphQLList) {
    list = true
    type = type.ofType
  }

  if (type instanceof GraphQLObjectType) {
    if (type.getInterfaces().some((i) => i.name === 'PaginatedList')) {
      isPaginatedList = true
    }
  }

  return [type.toString().replace(/!$/, ''), nullable, list, isPaginatedList]
}

function generateSchemaInfo(schema) {
  const types = schema.getTypeMap()
  const result = { types: {}, inputs: {}, scalars: [], enums: {} }

  Object.values(types).forEach((type) => {
    if (isObjectType(type)) {
      const fields = type.getFields()
      result.types[type.name] = {}

      Object.entries(fields).forEach(([fieldName, field]) => {
        result.types[type.name][fieldName] = getTypeInfo(field.type)
      })
    }
    if (isInputObjectType(type)) {
      const fields = type.getFields()
      result.inputs[type.name] = {}

      Object.entries(fields).forEach(([fieldName, field]) => {
        result.inputs[type.name][fieldName] = getTypeInfo(field.type)
      })
    }
    if (isScalarType(type)) {
      result.scalars.push(type.name)
    }
    if (isEnumType(type)) {
      result.enums[type.name] = type.getValues().map((v) => v.value)
    }
  })

  return result
}

// Generate schema info by introspecting a running Admin API
const outputPath = path.join(
  __dirname,
  '..',
  'src',
  'lib',
  'graphql',
  'schema-info.ts',
)

const interfaceDef = `export type FieldInfoTuple = [
  type: string,
  nullable: boolean,
  list: boolean,
  isPaginatedList: boolean,
];

export interface SchemaInfo {
  types: {
    [typename: string]: {
      [fieldname: string]: FieldInfoTuple
    }
  }
  inputs: {
    [typename: string]: {
      [fieldname: string]: FieldInfoTuple
    }
  }
  scalars: string[]
  enums: {
    [typename: string]: string[]
  }
}
`

async function main() {
  const adminApiUrl =
    process.env.ADMIN_API_URL || 'http://localhost:3000/admin-api'

  const headers = { 'content-type': 'application/json' }

  if (process.env.ADMIN_API_COOKIE) {
    headers['cookie'] = process.env.ADMIN_API_COOKIE
  }
  if (process.env.ADMIN_API_TOKEN) {
    headers['authorization'] = `Bearer ${process.env.ADMIN_API_TOKEN}`
  }

  let schemaInfo
  try {
    const response = await fetch(adminApiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query: getIntrospectionQuery() }),
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`)
    }

    const json = await response.json()
    if (json.errors) {
      const message = json.errors.map((e) => e.message).join('; ')
      throw new Error(`GraphQL errors: ${message}`)
    }

    const schema = buildClientSchema(json.data)
    schemaInfo = generateSchemaInfo(schema)
  } catch (error) {
    console.warn(
      'Failed to introspect Admin API, using empty schema info:',
      error,
    )
    schemaInfo = { types: {}, inputs: {}, scalars: [], enums: {} }
  }

  const fileContent = `${interfaceDef}\nexport const schemaInfo: SchemaInfo = ${JSON.stringify(schemaInfo, null, 2)};\n`
  fs.writeFileSync(outputPath, fileContent)
}

await main()
