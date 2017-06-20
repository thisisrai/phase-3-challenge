const pgp = require ('pg-promise')()
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/grocery_store`
const db = pgp(connectionString)

const allItems = () => {
    db.any('SELECT id, name,  FROM grocery_items')
    .then(console.log)
    .catch(console.log)
}

const itemsInSection = (section) => {
    db.any('SELECT id, name FROM grocery_items WHERE section = $1', section)
    .then(console.log)
    .catch(console.log)
}

const cheapItems = () => {
    db.any('SELECT id, price FROM grocery_items WHERE price <= 10 ORDER BY price ASC')
    .then(console.log)
    .catch(console.log)
}

const countItemsInSection = (section) => {
    let count = 0; 
    db.any('SELECT * FROM grocery_items WHERE section = $1', section)
    .then(data => {
        data.forEach(item => {
            count++
        })
        console.log(count)
    })
    .catch(console.log)
}

const mostRecentOrders = () => {
    db.any('SELECT id, date_purchased FROM orders ORDER BY date_purchased ASC LIMIT 10')
    .then(console.log)
    .catch(console.log)
}

const lastShopperName = () => {
    db.any('SELECT shopper FROM orders ORDER BY date_purchased ASC LIMIT 1')
    .then(console.log)
    .catch(console.log)
}

const orderTotal = (ID) => {
    db.any('SELECT SUM(price) FROM orders LEFT JOIN grocery_items ON name = item WHERE orders.id = $1', ID)
    .then(console.log)
    .catch(console.log) 
}
