const typeDefs = `
  # TODO: Add a comment describing the functionality of this statement
  # Defines what data fields the Apollo server can query from the Class model
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
