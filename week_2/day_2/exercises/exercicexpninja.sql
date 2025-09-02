SELECT first_name, last_name
FROM customers
ORDER BY last_name, first_name
LIMIT 2
OFFSET 3;

DELETE FROM purchases
WHERE customer_id = (SELECT customer_id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott');

SELECT * FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott';

SELECT *
FROM purchases
LEFT JOIN customers
ON purchases.customer_id = customers.customer_id;

SELECT *
FROM customers
LEFT JOIN purchases
ON purchases.customer_id = customers.customer_id;

SELECT *
FROM customers
INNER JOIN purchases
ON purchases.customer_id = customers.customer_id;