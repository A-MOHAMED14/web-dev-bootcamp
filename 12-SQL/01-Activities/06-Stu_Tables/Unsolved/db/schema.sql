DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
\c books_db;

-- Add biography table --
DROP DATABASE IF EXISTS biography_db;
CREATE DATABASE biography_db;

CREATE TABLE biographies (
    id INTEGER,
    name VARCHAR(100)
);