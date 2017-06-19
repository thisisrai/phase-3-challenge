DROP TABLE IF EXISTS grocery_items; 

CREATE TABLE grocery_items (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(200) NOT NULL, 
    price DECIMAL(10, 2), 
    section VARCHAR(50) NOT NULL
)