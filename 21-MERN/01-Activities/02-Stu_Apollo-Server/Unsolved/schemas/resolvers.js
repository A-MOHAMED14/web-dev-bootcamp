const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression
// This async function executes the queries defined in the typeDef schema
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      // This query gets and returns all the documents from the classes collection
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
