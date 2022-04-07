const { gql } = require("apollo-server")


module.exports = gql`
    type Book {
        title: String!,
        author: String!,
    }
    type Query {
        totalBooks: Int!
        allBooks: [Book!]
    }
`;