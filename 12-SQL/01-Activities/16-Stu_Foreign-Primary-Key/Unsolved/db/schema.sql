-- Write your Schema Here -- 
DROP DATABASE IF EXISTS grocery_db;
CREATE TABLE grocery_db;

\c grocery_db;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
);

CREATE TABLE customer_orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER FOREIGN KEY REFERENCES customers(id),
    order_details TEXT
);