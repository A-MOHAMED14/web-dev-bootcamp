const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { DATE } = require("sequelize");

class Book extends Model {}

Book.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    isbn: {
      type: DataTypes.STRING,
    },
    pages: {
      type: DataTypes.INTEGER,
    },
    edition: {
      type: DataTypes.INTEGER,
    },
    is_paperback: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: "book",
  }
);

module.exports = Book;
