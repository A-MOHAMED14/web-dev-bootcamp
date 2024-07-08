-- Write code here or enter directly in PostgreSQL shell --
DROP DATABASE IF EXISTS sample_db;
CREATE DATABASE books_db;


\c books_db;
SELECT current_database();