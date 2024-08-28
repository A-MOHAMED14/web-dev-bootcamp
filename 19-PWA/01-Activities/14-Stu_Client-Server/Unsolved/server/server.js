const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Add comment on role of code below
// Serves static files within the clients dist folder
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requires the route which serves the client with the index.html file within the clients dist folder
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
