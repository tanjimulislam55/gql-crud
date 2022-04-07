const books = require('../books')

const totalBooks = () => books.length;
const allBooks = () => books;

module.exports = {
    Query: {
        totalBooks,
        allBooks
    }
}