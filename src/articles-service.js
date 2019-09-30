const ArticlesService = {
    getAllArticles(knex){ //inject knex instance to getAllArticles, so that getAllArticles has access to the knex instance
        return knex.select('*').from('blogful_articles')   // query blogful_articles table
    }, 
    insertArticle(knex, newArticle){
        return knex
          .insert(newArticle) // inserts "item we've seen before"
          .into('blogful_articles')
          .returning('*') //select new item as array 
          .then(rows => { //speciifes which columns to select
              return rows[0] //select object from array
          }) 
    },
    getById(knex, id){
        return knex.from('blogful_articles').select('*').where('id', id).first()
    },
    deleteArticle(knex, id){
        return knex('blogful_articles')
         .where({id})
         .delete()
    },
    updateArticle(knex, id, newArticleFields){
        return knex('blogful_articles')
        .where({id})
        .update(newArticleFields)
    },
}

module.exports = ArticlesService
