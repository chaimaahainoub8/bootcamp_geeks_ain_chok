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