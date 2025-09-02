--exercice 1 ------------
SELECT name FROM language;

SELECT
    f.title,
    f.description,
    l.name AS language_name
FROM
    film AS f
INNER JOIN
    language AS l ON f.language_id = l.language_id;


SELECT
    f.title,
    f.description,
    l.name AS language_name
FROM
    language AS l
LEFT JOIN
    film AS f ON l.language_id = f.language_id;


CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES
('The Dark Knight'),
('Forrest Gump'),
('The Godfather');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title VARCHAR(255),
    score INTEGER CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text) VALUES
(1, 1, 'A masterpiece!', 10, 'One of the best superhero movies ever made.'),
(2, 1, 'Heartwarming story', 9, 'A beautiful film about life.');

DELETE FROM new_film WHERE id = 1;

-- exercice 2 -------

UPDATE film
SET language_id = 5
WHERE film_id IN (1, 2);

DROP TABLE IF EXISTS customer_review;

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

SELECT
    f.title,
    f.replacement_cost
FROM
    rental r
JOIN
    inventory i ON r.inventory_id = i.inventory_id
JOIN
    film f ON i.film_id = f.film_id
WHERE
    r.return_date IS NULL
ORDER BY
    f.replacement_cost DESC
LIMIT 30;

SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE
    a.first_name = 'PENELOPE' AND a.last_name = 'MONROE'
    AND f.description LIKE '%Sumo Wrestler%';

SELECT f.title, f.length, f.rating
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE
    c.name = 'Documentary'
    AND f.length < 60
    AND f.rating = 'R';

SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
JOIN payment p ON r.rental_id = p.rental_id
WHERE
    c.first_name = 'MATTHEW' AND c.last_name = 'MAHAN'
    AND p.amount > 4.00
    AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

SELECT f.title, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE
    c.first_name = 'MATTHEW' AND c.last_name = 'MAHAN'
    AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;
