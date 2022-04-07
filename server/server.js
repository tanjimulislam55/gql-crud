const { ApolloServer } = require("apollo-server")
const { mergeResolvers } = require("@graphql-tools/merge")
const { loadFilesSync } = require('@graphql-tools/load-files')
const path = require('path')

const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname, './resolvers')))
const typeDefs = mergeResolvers(loadFilesSync(path.join(__dirname, './typeDefs')))

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
})


apolloServer.listen().then(({ url }) => {
    console.log(`Server in running at ${url}`)
})