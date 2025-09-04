---Exercice 1---------
-- 1.
SELECT
    *
FROM
    rental
WHERE
    return_date IS NULL;

-- 2.
SELECT
    c.first_name,
    c.last_name
FROM
    customer c
JOIN
    rental r ON c.customer_id = r.customer_id
WHERE
    return_date IS NULL
GROUP BY
    c.customer_id;

-- 3.
SELECT
    f.title
FROM
    film f
JOIN
    film_category fc ON f.film_id = fc.film_id
JOIN
    category c ON fc.category_id = c.category_id
JOIN
    film_actor fa ON f.film_id = fa.film_id
JOIN
    actor a ON fa.actor_id = a.actor_id
WHERE
    c.name = 'Action'
    AND a.first_name = 'Joe'
    AND a.last_name = 'Swank';

-- 4.
CREATE VIEW unreturned_rentals_summary AS
SELECT
    r.rental_id,
    r.rental_date,
    c.customer_id,
    c.first_name,
    c.last_name,
    f.film_id,
    f.title
FROM
    rental r
JOIN
    customer c ON r.customer_id = c.customer_id
JOIN
    inventory i ON r.inventory_id = i.inventory_id
JOIN
    film f ON i.film_id = f.film_id
WHERE
    return_date IS NULL;

-- 5.
SELECT title, first_name, last_name FROM unreturned_rentals_summary;

-- 6.
SELECT first_name, last_name FROM unreturned_rentals_summary GROUP BY first_name, last_name;

--Exercice 2-----

-- 1
SELECT
  s.store_id,
  ci.city,
  co.country
FROM store AS s
JOIN address AS a
  ON s.address_id = a.address_id
JOIN city AS ci
  ON a.city_id = ci.city_id
JOIN country AS co
  ON ci.country_id = co.country_id;

-- 2 & 3
SELECT
  i.store_id,
  SUM(f.length) / 60 AS hours_of_viewing
FROM inventory AS i
JOIN film AS f
  ON i.film_id = f.film_id
WHERE i.inventory_id NOT IN (SELECT inventory_id FROM rental WHERE return_date IS NULL)
GROUP BY
  i.store_id;

-- 4
SELECT
  c.first_name,
  c.last_name
FROM customer AS c
JOIN address AS a
  ON c.address_id = a.address_id
WHERE a.city_id IN (
  SELECT a.city_id FROM store s JOIN address a ON s.address_id = a.address_id
);

-- 5
SELECT
  c.first_name,
  c.last_name
FROM customer AS c
JOIN address AS a
  ON c.address_id = a.address_id
JOIN city AS ci
  ON a.city_id = ci.city_id
WHERE ci.country_id IN (
  SELECT
    ci.country_id
  FROM store AS s
  JOIN address AS a
    ON s.address_id = a.address_id
  JOIN city AS ci
    ON a.city_id = ci.city_id
);

-- 6
SELECT
  SUM(length) as safe_viewing_time_in_minutes
FROM film
WHERE film_id NOT IN (
  SELECT
    film_id
  FROM film_category
  WHERE category_id = (SELECT category_id FROM category WHERE name = 'Horror')
) AND NOT (
  title ILIKE ANY(ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
  OR
  description ILIKE ANY(ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
);

-- 7
-- General List
WITH general_list_minutes AS (
  SELECT SUM(f.length) AS total_minutes
  FROM inventory i
  JOIN film f ON i.film_id = f.film_id
  WHERE i.inventory_id NOT IN (
    SELECT inventory_id FROM rental WHERE return_date IS NULL
  )
)
SELECT
  total_minutes,
  total_minutes / 60.0 AS total_hours,
  total_minutes / (60.0 * 24.0) AS total_days
FROM general_list_minutes;

-- Safe List
WITH safe_list_minutes AS (
  SELECT SUM(length) AS total_minutes
  FROM film
  WHERE film_id NOT IN (
    SELECT
      film_id
    FROM film_category
    WHERE category_id = (SELECT category_id FROM category WHERE name = 'Horror')
  ) AND NOT (
    title ILIKE ANY(ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
    OR
    description ILIKE ANY(ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
  )
)
SELECT
  total_minutes,
  total_minutes / 60.0 AS total_hours,
  total_minutes / (60.0 * 24.0) AS total_days
FROM safe_list_minutes;
