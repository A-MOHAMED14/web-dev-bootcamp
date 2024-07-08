-- TODO: What is the SQL code below doing?
-- Tells psql to insert data into id & name columns respectively  
INSERT INTO biographies (id, name)
VALUES
    ( 001, 'Diary of Anne Frank'),
    ( 002, 'Frida: A Biography of Frida Kahlo'),
    ( 003, 'Long Walk to Freedom');
-- Inserts multiple biographies
SELECT * FROM biographies;