const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema` for the subdocument

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // TODO: Add the `books` subdocument to the parent document as an array
  books:[ bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = new mongoose.model("Library", librarySchema);

// TODO: Create a new instance of the model including the subdocuments
const bookData = [
  { title: "The shining", price: 15 },
  { title: "Crime & Punishment", price: 25 },
  { title: "1984", price: 7 },
];

Library.create({
  name: "Books",
  books: bookData,
})
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

module.exports = Library;
