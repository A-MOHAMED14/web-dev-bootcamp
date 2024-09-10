const express = require('express');
// TODO: Add a comment describing the functionality of this expression
// Requires in the Appolo server class
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

// TODO: Add a comment describing the functionality of this expression
// Requires in the two parts of the GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

// TODO: Add a comment describing the functionality of this async function
// Creates a new instance of the Apollo server uisng the GrpahQL schema
const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  app.use('/graphql', expressMiddleware(server));

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    })
  })
};

// TODO: Add a comment describing this functionality
// Invokes the async function to start the server
startApolloServer();
