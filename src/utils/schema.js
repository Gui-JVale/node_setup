import { makeExecutableSchema } from 'apollo-server'
import merge from 'lodash.merge'
import fs from 'fs'
import path from 'path'
import defaultResolvers from '../types/default/default.resolvers'

/**
 * [Merges gql types and it's respectives resolvers into
 * one schema.
 * This way allowing gql modularization.
 * @return {[object]} [returns unified schema]
 */
async function getSchema() {
  const types = ['default'] // All types defined
  // Not allowed to have empty types
  const rootSchema = `
    type Query {
      _empty: String
    }
    type Mutation {
      _empty: String
    }
  `
  const schemaTypes = await Promise.all(types.map(loadTypeSchema))

  const schema = makeExecutableSchema({
    typeDefs: [rootSchema, String(schemaTypes)],
    resolvers: merge({}, defaultResolvers),
  })

  return schema
}

export default getSchema

//*============================ Implementation detail

const loadTypeSchema = (type) =>
  new Promise((resolve, reject) => {
    const pathToSchema = path.join(
      process.cwd(),
      `src/types/${type}/${type}.gql`
    )
    fs.readFile(pathToSchema, { encoding: 'utf-8' }, (err, schema) => {
      if (err) {
        return reject(err)
      }
      resolve(schema)
    })
  })
