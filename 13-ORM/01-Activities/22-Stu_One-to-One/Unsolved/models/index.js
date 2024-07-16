const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
  // When a reader is deleted, this will also delete the associated library card
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
// Exports both the Reader & LibraryCard models together as an object 
// after using association methods to establish a relationship between the models
// We can also import them together and use their proper names 
module.exports = { Reader, LibraryCard };
