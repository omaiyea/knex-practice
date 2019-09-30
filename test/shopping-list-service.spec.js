const ShoppingListService = require('../src/shopping-list-service')
const knex = require('knex')

describe(`Shopping List Service Object`, function(){
    let testItems = [
        {
            id: 1,
            name: 'Fish tricks', 
            price: '13.10', 
            category: 'Main',  
            checked: false,
            date_added: new Date('2029-01-22T08:00:00.000Z')
        },
        {
            id: 2,
            name: 'Not Dogs',
            price: '4.99', 
            category: 'Snack',
            checked: true,
            date_added: new Date('2020-02-22T08:00:00.000Z')
        },
        {
            id: 3,
            name: 'Bluffalo Wings', 
            price: '5.50', 
            category: 'Snack',
            checked: false,
            date_added: new Date('2009-02-22T08:00:00.000Z')
        },
    ]
    let db

    before(() => { //make db instance before the tests run
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
    })
    before(() => db('shopping_list').truncate()) //clean out test data before tests run
    afterEach(() => db('shopping_list').truncate()) // remove data after each tes
    after(() => db.destroy()) // close the db connection

    context(`Given 'shopping_list' has data`, () => {
        beforeEach(() => { //add test data to database
            return db
             .into('shopping_list')
             .insert(testItems)
        })
        
        it(`resolves all items from 'shopping_list' table`, () => {
            return ShoppingListService.getAllItems(db)
             .then(actual => {
                 expect(actual).to.eql(testItems)
             })
        })
        it(`getById() resolves an item by id from 'shopping_list`, () => {
            const thirdId = 3
            const thirdTestItem = testItems[thirdId - 1]
            return ShoppingListService.getById(db, thirdId)
             .then(actual => {
                 expect(actual).to.eql({
                     id: thirdId,
                     name: thirdTestItem.name,
                     price: thirdTestItem.price,
                     category: thirdTestItem.category,
                     checked: thirdTestItem.checked,
                     date_added: new Date(thirdTestItem.date_added)
                 })
             })
        })
        it(`deletes an item by id from shopping_list`, () => {
            const thirdId = 3
            return ShoppingListService.deleteItem(db, thirdId)
             .then(() => ShoppingListService.getAllItems(db))
             .then(allArticles => {
                 const expected = testItems.filter(item => item.id !== thirdId)
                 expect(allArticles).to.eql(expected)
             })
        })

        it(`updates an item from the 'shopping_list' table`, () => {
            const thirdId = 3
            const newItem = {
                name: 'updated name', 
                price: '17.10', 
                category: 'Main',  
                checked: true,
                date_added: new Date('2019-09-30T07:00:00.000Z')
            }
            return ShoppingListService.updateItem(db, thirdId, newItem)
            .then(() => ShoppingListService.getById(db, thirdId))
            .then(item => {
                expect(item).to.eql({
                    id: thirdId,
                    name: newItem.name,
                    price: newItem.price,
                    category: newItem.category,
                    checked: newItem.checked,
                    date_added: new Date(newItem.date_added)
                })
            })
        })
    })

    context(`Given 'shopping_list' has no data`, () => {
        it(`getAllItems() resolves an empty array`, () => {
            return ShoppingListService.getAllItems(db)
              .then(actual => {
                expect(actual).to.eql([])
              })
        })

        it(`insertItem() inserts a new shopping list item and resolves the new item with an 'id'`, () => {
            const newItem = {
                name: 'newItem', 
                price: '15.10', 
                category: 'Main',  
                checked: false,
                date_added: new Date('2019-09-30T07:00:00.000Z')
            }
            return ShoppingListService.insertItem(db, newItem)
             .then(actual => {
                 expect(actual).to.eql({
                     id: 1,
                     name: newItem.name,
                     price: newItem.price,
                     category: newItem.category,
                     checked: newItem.checked,
                     date_added: new Date(newItem.date_added)
                 })
             })
        })
    })

   // context(`Given 'shopping_list' does not have data`, () => {
        //tests
   // })
})