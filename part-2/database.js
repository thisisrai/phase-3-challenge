const pgp = require ('pg-promise')()
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/grocery_store`
const db = pgp(connectionString)

const allItems = () => {
    return db.any('SELECT id, name FROM grocery_items')
}

const itemsInSection = (section) => {
    return db.any('SELECT id, name FROM grocery_items WHERE section = $1', section)
}

const cheapItems = () => {
    return db.any('SELECT id, name, price FROM grocery_items WHERE price <= 10 ORDER BY price ASC')
}

const countItemsInSection = (section) => {
    return db.any('SELECT Count(name) FROM grocery_items WHERE section = $1', section)
}

const mostRecentOrders = () => {
    return db.any('SELECT id, date_purchased FROM orders ORDER BY date_purchased ASC LIMIT 10')
}

const lastShopperName = () => {
    return db.any('SELECT shopper FROM orders ORDER BY date_purchased ASC LIMIT 1')
}

const orderTotal = (ID) => {
    return db.any('SELECT SUM(price) FROM orders LEFT JOIN grocery_items ON name = item WHERE orders.id = $1', ID) 
}

module.exports = {
    allItems, 
    itemsInSection, 
    cheapItems, 
    countItemsInSection, 
    mostRecentOrders, 
    lastShopperName, 
    orderTotal
}
