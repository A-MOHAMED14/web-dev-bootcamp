const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  price: { type: Number, required: true },
});

// TODO: Create a custom instance method named `getDiscount`

bookSchema.methods.getDiscount = function () {
  const discountPrice = this.price * 0.4;

  console.log(`${this.title} has a discounted price of ${discountPrice}`);
};

// TODO: Create a model named `Book`
const Book = mongoose.model("Book", bookSchema);

// TODO: Create a new instance of the model

const discountedBook = new Book({
  title: "1984",
  price: 30,
});

// TODO: Call the custom instance method on the instance
discountedBook.getDiscount();

module.exports = Book;
