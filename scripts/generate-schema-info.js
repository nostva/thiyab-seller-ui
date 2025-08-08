import fs from 'fs'
import {
  buildSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  isEnumType,
  isInputObjectType,
  isObjectType,
  isScalarType,
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

// Generate schema info at build time
const schemaPath = path.join(__dirname, '..', 'schema.graphql')
const outputPath = path.join(
  __dirname,
  '..',
  'src',
  'lib',
  'graphql',
  'schema-info.ts',
)

let schemaInfo
try {
  const schemaString = fs.readFileSync(schemaPath, 'utf8')
  const safeSchema = buildSchema(schemaString)
  schemaInfo = generateSchemaInfo(safeSchema)
} catch (error) {
  console.warn('Failed to load schema.graphql, using empty schema info:', error)
  schemaInfo = { types: {}, inputs: {}, scalars: [], enums: {} }
}

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

const fileContent = `${interfaceDef}\nexport const schemaInfo: SchemaInfo = ${JSON.stringify(schemaInfo, null, 2)};\n`
fs.writeFileSync(outputPath, fileContent)
