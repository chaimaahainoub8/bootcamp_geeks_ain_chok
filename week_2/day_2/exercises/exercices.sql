-- Exercice 1 : Items and customers (Suite)

-- Question 1
SELECT * FROM items
ORDER BY price ASC;

-- Question 2
SELECT * FROM items
WHERE price >= 80
ORDER BY price DESC;

-- Question 3
SELECT first_name, last_name FROM customers
ORDER BY first_name ASC
LIMIT 3;

-- Question 4
SELECT last_name FROM customers
ORDER BY last_name DESC;

-- Exercice 2 ----------------------------------

--question 1
SELECT * FROM customer;

--question 2
SELECT first_name || ' ' || last_name
AS full_name FROM customer;

--question 3
SELECT DISTINCT create_date FROM customer;

--question 4
SELECT * FROM customer ORDER BY first_name DESC;

--question 5
SELECT film_id, title, description, release_year, rental_rate 
FROM film ORDER BY rental_rate ASC;

--question 6
SELECT address, phone FROM address WHERE district = 'Texas';

--question 7
SELECT * FROM film WHERE film_id = 15 OR film_id = 150;

--question 8
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE LOWER(title) = 'academy dinosaur';

--question 9
SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'AC%';

--question 10
SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10 ;

--question 11
SELECT * FROM film ORDER BY rental_rate ASC OFFSET 10 LIMIT 10 ;

--question 12
SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer AS c JOIN payment AS p 
ON c.customer_id = p.customer_id
ORDER BY c.customer_id ;

--question 13
SELECT f.title  FROM film AS f 
LEFT JOIN inventory AS i ON f.film_id = i.film_id 
WHERE i.inventory_id IS NULL

--question 14
SELECT city.city , country.country , country.country_id
FROM city 
JOIN country ON city.country_id = country.country_id

--question 15
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date 
FROM payment AS p 
JOIN customer AS c 
ON p.customer_id = c.customer_id 
ORDER BY p.staff_id