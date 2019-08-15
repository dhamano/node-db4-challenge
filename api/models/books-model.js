const knex = require('knex');
const config = require('../../knexfile');

const db = knex(config.development);

module.exports = {
  find,
  findBookRecipes
};

function find() {
  return db('recipe_books');
}

function findBookRecipes(id) {
  return db('book_recipes AS br')
          .innerJoin('recipes AS r', 'br.recipe_id', 'r.id')
          .innerJoin('recipe_books AS b', 'br.book_id', 'b.id')
          .select('br.id', 'b.book_name', 'r.recipe_name')
          .where('br.book_id', '=', id);
}