const knex = require('knex');
const config = require('../../knexfile');

const db = knex(config.development);

module.exports = {
  find,
  getRecipeIngredients,
  getRecipeInstructions
};

function find() {
  return db('recipes');
}

function getRecipeIngredients(id) {
  return db('recipe_ingredients AS ri')
          .innerJoin('recipes AS r', 'ri.recipe_id', 'r.id')
          .innerJoin('ingredients AS i', 'ri.ingredient_id', 'i.id')
          .select('ri.id', 'r.recipe_name', 'ri.quantity', 'ri.measurement', 'i.ingredient_name')
          .where('ri.recipe_id', '=', id);
}

function getRecipeInstructions(id) {
  return db('recipe_instructions AS ri')
          .innerJoin('recipes AS r', 'ri.recipe_id', 'r.id')
          .innerJoin('instructions AS i', 'ri.instructions_id', 'i.id')
          .select('ri.id', 'r.recipe_name', 'i.step', 'i.description')
          .where('ri.recipe_id', '=', id);
}