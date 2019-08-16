const knex = require('knex');
const config = require('../../knexfile');

const db = knex(config.development);

module.exports = {
  find,
  findById,
  findBookRecipes,
  add,
  update,
  remove
};

function find() {
  return db('recipe_books');
}

function findById(id) {
  return db('recipe_books').where({ id });
}

function findBookRecipes(id) {
  return db('book_recipes AS br')
          .innerJoin('recipes AS r', 'br.recipe_id', 'r.id')
          .innerJoin('recipe_books AS b', 'br.book_id', 'b.id')
          .select('br.id', 'b.book_name', 'r.recipe_name')
          .where('br.book_id', '=', id);
}

function add(name) {
  return db('recipe_books').insert({ ...name });
}

function update(name, id) {
  return db('recipe_books').where({ id }).update({ ...name });
}

function remove(id) {
  return db('recipe_books').where({ id }).del();
}