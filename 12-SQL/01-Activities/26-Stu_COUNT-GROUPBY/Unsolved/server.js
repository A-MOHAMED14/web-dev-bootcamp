const express = require('express');
// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
  {
    // TODO: Enter PostgreSQL username
    user: 'postgres',
    // TODO: Enter PostgreSQL password
    password: 'postgres123!',
    host: 'localhost',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
)

pool.connect();

// This query determines the number of books that are in stock and the number of books that are out of stock
// using the COUNT() aggregate function and the GROUP BY statement.
pool.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, {rows}) {
  console.log(rows);
});

// This query determines the sum, max, min and average quantity of each section 
// Using the SUM(), MAX(), MIN() & AVG() aggregate functions.
pool.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, {rows}) {
  console.log(rows);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
