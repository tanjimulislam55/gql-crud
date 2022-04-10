const books = require('../books')
const { uuid } = require('uuidv4')

const totalBooks = () => books.length;

const allBooks = () => books;

const bookCreate = (parent, args, context) => {
    // create a new object
    const book = {
        id: uuid(),
        title: args.input.title,
        author: args.input.author
    }
    books.push(book)
    return book
}

const bookUpdate = (parent, args, context) => {
    const book = books.find(book => book.id === args.input.id)
    if (!book) {
        throw new Error("Id doesn't exist")
    }
    Object.keys(args.input).forEach((key) => {
        book[key] = args.input[key]
    })
    return book
}

const bookDelete = (parent, args, context) => {
    console.log(args)
    const book = books.find(book => book.id === args.bookId)
    if (!book) {
        throw new Error("Id doesn't exist")
    }
    delete books[book]
    return book
    // const ok = Boolean(book)
    // return { ok }
}

module.exports = {
    Query: {
        totalBooks,
        allBooks,
    },
    Mutation: {
        bookCreate,
        bookUpdate,
        bookDelete
    }
}