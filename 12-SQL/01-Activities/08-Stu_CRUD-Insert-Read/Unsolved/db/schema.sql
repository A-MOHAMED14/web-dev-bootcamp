DROP DATABASE IF EXISTS books_db;

-- TODO: What is the SQL code below doing?
-- Creates a database called books_db
CREATE DATABASE books_db;

-- TODO: What is the SQL code below doing?
-- Connects to the books_db database
\c books_db;

-- TODO: What is the SQL code below doing?
-- Creates a table called biographies within books_db 
CREATE TABLE biographies (

  -- TODO: What is the SQL code below doing?
  -- Creates an integer column called id which cannot be null
  id INTEGER NOT NULL,

  -- TODO: What is the SQL code below doing?
  -- Creates a string column called name which can contain upto 100 character and cannot be null
  name VARCHAR(100) NOT NULL
);

