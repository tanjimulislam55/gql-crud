const books = require('../books')
const { uuid } = require('uuidv4')

const totalBooks = () => books.length;

const allBooks = () => books;

const bookCreate = (parent, args, context) => {
    console.log(args)
    // create a new object
    const book = {
        id: uuid(),
        title: args.input.title,
        author: args.input.author
    }
    books.push(book)
    return book
}

module.exports = {
    Query: {
        totalBooks,
        allBooks,
    },
    Mutation: {
        bookCreate
    }
}