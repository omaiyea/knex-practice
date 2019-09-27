require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
})

const qry =  knexInstance
   .select('product_id', 'name', 'price', 'category')
   .from('amazong_products')
   .where({name: 'Point of view gun'})
   .first()
   .toQuery()
//   .then(result => 
  //   console.log(result)
  // )

console.log(qry);
