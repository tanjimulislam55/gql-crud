const { gql } = require("apollo-server")


module.exports = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
    }
    # input type
    input BookCreateInput {
        title: String!
        author: String!
    }
    # input type
    input BookUpdateInput {
        id: ID!
        title: String
        author: String
    }
    # type query
    type Query {
        totalBooks: Int!
        allBooks: [Book!]
        singleBook(bookId: String!): Book!
        search(query: String): [Book]
    }
    # type mutation
    type Mutation {
        # bookCreate(title: String!, author: String!): Book!
        bookCreate(input: BookCreateInput!): Book!
        bookUpdate(input: BookUpdateInput!): Book!
        bookDelete(bookId: ID!): Book!
    }
`;