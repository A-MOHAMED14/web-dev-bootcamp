// ? Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

// ? Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Describe what the following two lines of code are doing.
// Registers handlebars as the template engine for the Express app. 
// Sets handlebars as the default template engine/tool for the Express app.
app.engine('handlebars', hbs.engine);
// Sets handlebars as the default view engine for the Express app.
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/dish-routes'));

// ? Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});