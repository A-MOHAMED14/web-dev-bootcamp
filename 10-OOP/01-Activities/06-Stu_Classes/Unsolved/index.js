// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
// TODO: Give BlogPost a property called 'comments' that is set to an empty array.
// TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.
// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.
// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', and 'createdOn'.

class BlogPost {
  constructor(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
  }

  comments = [];

  printMetaData() {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) with (text)'.

class Comment {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }

  printMetaData() {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  }
}

// TODO: Create a new object using the Comment class constructor.

// TODO: Create a new object using the BlogPost class constructor.

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.

// TODO: Print the meta data for both the BlogPost and the Comment to the console.

const comment1 = new Comment("Leandro", "Hello World!", "24/05/2012");

const blogPost1 = new BlogPost(
  "Martin",
  "Trust The Process",
  "Victory Through Harmony",
  "14/08/2022"
);

blogPost1.addComment("Red & White!");

blogPost1.printMetaData();
comment1.printMetaData();
