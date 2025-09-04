CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    order_date DATE NOT NULL DEFAULT CURRENT_DATE,
    user_id INT REFERENCES users(user_id)
);

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    order_id INT REFERENCES product_orders(order_id)
);


-- 3. Create a function that returns the total price for a given order.

CREATE OR REPLACE FUNCTION get_order_total(p_order_id INT)
RETURNS DECIMAL AS $$
BEGIN
    RETURN (SELECT SUM(price) FROM items WHERE order_id = p_order_id);
END;
$$ LANGUAGE plpgsql;


-- Bonus 3. Create a function that returns the total price for a given order of a given user.

CREATE OR REPLACE FUNCTION get_user_order_total(p_user_id INT, p_order_id INT)
RETURNS DECIMAL AS $$
BEGIN
    RETURN (
        SELECT SUM(i.price)
        FROM items AS i
        JOIN product_orders AS po ON i.order_id = po.order_id
        WHERE po.user_id = p_user_id AND po.order_id = p_order_id
    );
END;
$$ LANGUAGE plpgsql;