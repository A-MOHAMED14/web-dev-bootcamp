// book should be an object with title, author, and date published properties
const book = {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  published: "26 June 1997",
};

// Write code between the backticks tags to output the data from the book object above.
const bookSnippet = `The first Harry Potter book ${book.author} wrote was ${book.title} and was originally published on ${book.published}`;

console.log(bookSnippet);
