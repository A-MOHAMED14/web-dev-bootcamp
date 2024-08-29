import { openDB } from 'idb';

// Function used to start up the database
const initdb = async () =>

// TODO: Add a comment explaining what this method does
// Creates a database called todos, using version 1
  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
    // Checks if an object store called todos exists within the database
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      // Creates an object store called todos within the todos database
      // Also creates an id key which auto-increments
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
