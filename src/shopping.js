require('dotenv').config()

const knex = require('knex')
const ShoppingListService = require('./shopping-list-service')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.TEST_DB_URL,
})

console.log(ShoppingListService.getAllItems(knex))