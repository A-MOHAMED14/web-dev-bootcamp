const mongoose = require('mongoose');

// TODO: Add a comment describing the functionality of the code below
// Defines the properties, datatypes and constraints that the models will use.
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Add a comment describing the functionality of the code below
// Creates a Book model which uses the bookSchema schema
const Book = mongoose.model('Book', bookSchema);

const handleError = (err) => console.error(err);

// TODO: Add a comment describing the functionality of the code below
// Creates a document using the Book model
Book
  .create({
    title: 'Diary of Anne Frank',
    author: 'Anne Frank',
    publisher: 'Scholastic',
    stockCount: 10,
    price: 10,
    inStock: true,
  })
  .then(result => console.log('Created new document', result))
  .catch(err => handleError(err));

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
// Creates a document using only two propoerties, the required title and optional author properties  
Book
  .create({
    title: 'Oh the Places You Will Go!',
    author: 'Dr. Seuss'
  })
  .then(result => console.log('Created new document', result))
  .catch(err => handleError(err));

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
// Creates a document using the required title property
Book.create({ title: 'Harold and the Purple Crayon' })
  .then(result => console.log('Created new document', result))
  .catch(err => handleError(err));

module.exports = Book;
