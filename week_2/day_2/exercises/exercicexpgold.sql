--- Exercice 1 ------
--question 1------
SELECT rating, COUNT(film_id)
FROM film
GROUP BY rating;

--question 2------
SELECT *
FROM film
WHERE rating = 'G' OR rating = 'PG-13';

--quesstion 3------
SELECT title, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13')
AND length < 120
AND rental_rate < 3.00
ORDER BY title ASC;

--question 4------
UPDATE customer
SET first_name = 'Chaimaa', last_name = 'Hainoub', email = 'chaimaa.hainoub1@gmail.com'
WHERE customer_id = 1; 

--question 5------
UPDATE address
SET address = 'Ain Chok',
    district = 'Casablanca',
    city_id = 300, 
    postal_code = '20210'
WHERE address_id = (SELECT address_id FROM customer WHERE customer_id = 1);

--Exercice 2----

UPDATE students
SET birth_date = '1998-11-02'
WHERE first_name IN ('Lea', 'Marc') AND last_name = 'Benichou';

UPDATE students
SET last_name = 'Guez'
WHERE first_name = 'David' AND last_name = 'Grez';

DELETE FROM students
WHERE first_name = 'Lea' AND last_name = 'Benichou';

SELECT COUNT(*) FROM students;

SELECT COUNT(*) FROM students
WHERE birth_date > '2000-01-01';

--insert / alter

ALTER TABLE students
ADD COLUMN math_grade INTEGER;

UPDATE students
SET math_grade = 80
WHERE id = 1;

UPDATE students
SET math_grade = 90
WHERE id IN (2, 4);

UPDATE students
SET math_grade = 40
WHERE id = 6;

SELECT COUNT(*) FROM students
WHERE math_grade > 83;

SELECT COUNT(math_grade) AS students_with_high_grade FROM students
WHERE math_grade > 83;

INSERT INTO students (first_name, last_name, birth_date, math_grade)
SELECT 'Omer', 'Simpson', birth_date, 70
FROM students
WHERE first_name = 'Omer' AND last_name = 'Simpson'
LIMIT 1;

SELECT
    first_name,
    last_name,
    COUNT(*) AS total_grade
FROM students
GROUP BY first_name, last_name;

SELECT SUM(math_grade) FROM students;

--Exercice 3 ----

CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL REFERENCES customers(customer_id),
    item_id INTEGER NOT NULL REFERENCES items(item_id),
    quantity_purchased INTEGER
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES
(
    (SELECT customer_id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
    (SELECT item_id FROM items WHERE item_name = 'Fan'),
    1
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES
(
    (SELECT customer_id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
    (SELECT item_id FROM items WHERE item_name = 'Large Desk'),
    10
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES
(
    (SELECT customer_id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
    (SELECT item_id FROM items WHERE item_name = 'Small Desk'),
    2
);

SELECT * FROM purchases;

SELECT *
FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id;

SELECT * FROM purchases WHERE customer_id = 5;

SELECT *
FROM purchases p
JOIN items i ON p.item_id = i.item_id
WHERE i.item_name IN ('Small Desk', 'Large Desk');

SELECT c.first_name, c.last_name, i.item_name
FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id
JOIN items i ON p.item_id = i.item_id;

INSERT INTO purchases (customer_id, quantity_purchased) VALUES (1, 5);
