const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  bookid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  count: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
