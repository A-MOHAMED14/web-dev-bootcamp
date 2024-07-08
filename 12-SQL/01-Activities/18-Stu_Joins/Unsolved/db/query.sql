-- Add your code below and execute file in the PostgreSQL Shell --
SELECT book_name, book_price
FROM favorite_books
JOIN book_prices
ON favorite_books.book_price = book_prices.id;