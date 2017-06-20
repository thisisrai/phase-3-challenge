DROP TABLE IF EXISTS grocery_items; 
DROP TABLE IF EXISTS shoppers; 
DROP TABLE IF EXISTS orders; 

CREATE TABLE grocery_items (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(200) NOT NULL, 
    price DECIMAL(10, 2), 
    section VARCHAR(50) NOT NULL
); 

CREATE TABLE shoppers (
    id SERIAL PRIMARY KEY, 
    first_name VARCHAR(200) NOT NULL, 
    last_name VARCHAR(200) NOT NULL
); 

CREATE TABLE orders (
    id INT, 
    date_purchased date, 
    shopper VARCHAR(200) NOT NULL, 
    item VARCHAR(200) NOT NULL
); 

INSERT INTO shoppers(first_name, last_name) VALUES
    ('Rai', 'Lee'), 
    ('Michael', 'Masterson'), 
    ('Phil', 'Awesome');

INSERT INTO orders VALUES
    ('1', '2017-01-01', 'Rai', 'Fruit'), 
    ('1', '2017-01-01', 'Rai', 'Bacon'), 
    ('2', '2017-01-01', 'Michael', 'Bacon'), 
    ('3', '2017-01-01', 'Phil', 'Ice Cream');