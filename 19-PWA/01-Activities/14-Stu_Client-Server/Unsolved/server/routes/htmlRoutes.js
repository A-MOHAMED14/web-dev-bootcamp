const path = require('path');

// TODO: Add comment explaining role of route below
// Any GET requests made to the root route "/", it will serve the index.html file in the clients dist folder
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
