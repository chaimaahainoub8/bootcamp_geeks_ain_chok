
-- Create and populate the actors table

CREATE TABLE actors (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_day DATE,
    number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name, last_name, birth_day, number_oscars) VALUES
    ('Tom', 'Hanks', '1956-07-09', 2), ('Meryl', 'Streep', '1949-06-22', 3),
    ('Denzel', 'Washington', '1954-12-28', 2), ('Leonardo', 'DiCaprio', '1974-11-11', 1),
    ('Katharine', 'Hepburn', '1907-05-12', 4), ('Daniel', 'Day-Lewis', '1957-04-29', 3),
    ('Jodie', 'Foster', '1962-11-19', 2), ('Morgan', 'Freeman', '1937-06-01', 1),
    ('Viola', 'Davis', '1965-08-11', 1), ('Christian', 'Bale', '1974-01-30', 1),
    ('Al', 'Pacino', '1940-04-25', 1), ('Tom', 'Cruise', '1962-07-03', 0);

-- Exercise 1: Count how many actors are in the table.

SELECT COUNT(*) FROM actors;

-- Answer: There are 12 actors.

-- Exercise 2: Try to add a new actor with blank fields.

INSERT INTO actors (first_name) VALUES ('Zendaya');

-- Answer: It will cause an error because 'last_name' and 'number_oscars' cannot be NULL.
-- The following command will fail if you run it.



