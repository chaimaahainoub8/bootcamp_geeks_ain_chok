-- Question 1: Retrieve all films with a rating of G or PG, which are not currently rented.
SELECT
    f.title,
    f.rating
FROM
    film f
LEFT JOIN
    inventory i ON f.film_id = i.film_id
LEFT JOIN
    rental r ON i.inventory_id = r.inventory_id
WHERE
    f.rating IN ('G' , 'PG')
    AND (r.rental_id IS NULL OR r.return_date IS NOT NULL)
GROUP BY
    f.film_id;


-- Question 2: Create a new table which will represent a waiting list for children's movies.
CREATE TABLE waiting_list (
    waiting_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customer(customer_id),
    film_id INT REFERENCES film(film_id),
    wait_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Test data for Question 3
INSERT INTO waiting_list (customer_id, film_id) VALUES
(1, 10),
(2, 10),
(3, 15),
(1, 15),
(4, 20);


-- Question 3: Retrieve the number of people waiting for each children's DVD.
SELECT
    f.title,
    COUNT(w.customer_id) AS waiting_count
FROM
    waiting_list w
JOIN
    film f ON w.film_id = f.film_id
GROUP BY
    f.title;

