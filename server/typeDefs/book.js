const { gql } = require("apollo-server")


module.exports = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
    }
    type Query {
        totalBooks: Int!
        allBooks: [Book!]
    }
    input BookInput {
        title: String!
        author: String!
    }
    type Mutation {
        # bookCreate(title: String!, author: String!): Book!
        bookCreate(input: BookInput!): Book!
    }
`;