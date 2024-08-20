const express = require('express');
// Run npm install mongodb in terminal and require mongodb module and MongoClient class
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

// The connection string that is used to connect to a specific MongoDB server locally
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Creates a new MongoClient instance using the connectionStringURI
const client = new MongoClient(connectionStringURI);

// Declare a variable which will be used to connect to a specific database 
let db;

// Create a variable to store a database name 
const dbName = 'inventoryDB';

// Connect method is used to connect to a MongoDB server
client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    // Connects to a database specified by dbName
    db = client.db(dbName);

    // Start running the Express server
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

  // Middleware used to convert request bodies to JSON format
app.use(express.json());



app.post('/create', (req, res) => {
 // Use db connection to add a document in bookCollection
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author }
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

app.post('/create-many', (req, res) => {
  // Use db connection to add many documents to bookCollection
  db.collection('bookCollection').insertMany(
    [
      { "title": "Oh the Places We Will Go!" },
      { "title": "Diary of Anne Frank" }
    ]
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

app.get('/read', (req, res) => {
  // Use db connection to find all documents in bookCollection collection
  db.collection('bookCollection')
    .find()
    .toArray()
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});
