// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
//  This file is part of the Controller. 
// It acts as an intermediary between the View and the Model. It processes client requests/user inputs, invokes the model to sends a response to the client.
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// GET route for getting all the dishes on the menu
router.get('/', async (req, res) => {
// TODO: Add a comment describing the purpose of the render method
// It renders the all.handlebars file
  res.render('all');
});

module.exports = router;
