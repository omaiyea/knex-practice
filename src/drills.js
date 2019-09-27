require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
})

//question 1: 
//A function that takes one parameter for searchTerm which will be any string
//The function will query the shopping_list table using Knex methods and select the rows which have a name that contains the searchTerm using a case insensitive match.

function getItemsWithTerm(searchTerm){
    knexInstance
      .select('*')
      .from('shopping_list')
      .where('name', 'ILIKE', `%${searchTerm}%`)
      .then(result => {
          console.log('search item');
          console.log(result);
        })
}

//question 2:
//A function that takes one parameter for pageNumber which will be a number
//The function will query the shopping_list table using Knex methods and select the pageNumber page of rows paginated to 6 items per page.
function getItemsPag(pageNumber){
    const productsPerPage = 4;
    const offset = productsPerPage * (pageNumber -1);
    knexInstance
      .select('*')
      .from('shopping_list')
      .limit(productsPerPage)
      .offset(offset)
      .then(result => {
          console.log('pagination');
          console.log(result);
      })
}

//question 3
//A function that takes one parameter for daysAgo which will be a number representing a number of days.
//This function will query the shopping_list table using Knex methods and select the rows which have a date_added that is greater than the daysAgo.
function getItemsAfterDate(daysAgo){
    knexInstance
      .select('*')
      .from('shopping_list')
      .where('date_added', '<=' , knexInstance.raw(`now() - '?? days' ::INTERVAL `, daysAgo))
      .then(result => {
          console.log('items after days');
          console.log(result);
      })
}

//q4
//A function that takes no parameters
//The function will query the shopping_list table using Knex methods and select the rows grouped by their category and showing the total price for each category.
function getTotalCostByCategory(){
    knexInstance
      .select('category')
      .sum('price AS totalPrice')
      .from('shopping_list')
      .groupBy('category')
      .then(result => { 
          console.log('cost by category');
          console.log(result);
      })
}


getItemsWithTerm('fish');
getItemsPag(3);
getItemsAfterDate(1);
getTotalCostByCategory();