--daily challenge

--Q1. What will be the OUTPUT of the following statement?
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );

-- OUTPUT: 0
-- REASON: The subquery returns a NULL value. The `NOT IN` clause cannot correctly evaluate a list containing NULL, so the condition becomes UNKNOWN for all rows, and none are returned.

---

--Q2. What will be the OUTPUT of the following statement?
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );

-- OUTPUT: 2
-- REASON: The subquery returns a list containing only {5}. The query counts the rows in FirstTab where the ID is not 5. The IDs 6 and 7 meet this condition. The NULL ID is ignored.

---

--Q3. What will be the OUTPUT of the following statement?
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );

-- OUTPUT: 0
-- REASON: The subquery returns a list {5, NULL}. As with Q1, the presence of NULL in the `NOT IN` list makes the condition UNKNOWN for all rows, so no rows are selected.

---

--Q4. What will be the OUTPUT of the following statement?
SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );

-- OUTPUT: 2
-- REASON: The subquery returns a list containing only {5}. The query counts rows where the ID is not 5. The IDs 6 and 7 from FirstTab satisfy this condition. The NULL ID is ignored.