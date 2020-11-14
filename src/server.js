import { ApolloServer } from 'apollo-server'
import config from './config'
import { connect } from './utils/db'
import getSchema from './utils/schema'

export const start = async () => {
  const schema = await getSchema()
  const server = new ApolloServer({ schema })
  // await connect(config.dbUrl)
  const { url } = await server.listen({ port: config.port })

  console.log(`GQL server ready at ${url}`)
}
