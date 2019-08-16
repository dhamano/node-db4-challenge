const knex = require('knex');
const config = require('../../knexfile');

const db = knex(config.development);

module.exports = {
  find,
  findById,
  getRecipeIngredients,
  getRecipeInstructions,
  add,
  addInstruction
};

function find() {
  return db('recipes');
};

function findById(id) {
  return db('recipes').where({ id });
};

function getRecipeIngredients(id) {
  return db('recipe_ingredients AS ri')
          .innerJoin('recipes AS r', 'ri.recipe_id', 'r.id')
          .innerJoin('ingredients AS i', 'ri.ingredient_id', 'i.id')
          .select('ri.id', 'r.recipe_name', 'ri.quantity', 'ri.measurement', 'i.ingredient_name')
          .where('ri.recipe_id', '=', id);
};

function getRecipeInstructions(id) {
  return db('instructions AS i')
          .innerJoin('recipes AS r', 'r.id', 'i.recipe_id')
          .select('i.id', 'i.recipe_id', 'r.recipe_name', 'i.step', 'i.description')
          .where('i.recipe_id', '=', id);
};

function add(recipe) {
  return db('recipes').insert({ ...recipe });
};

async function addInstruction(instruction, id) {
  try{
    const instructionId = await db('instructions').where({ id }).insert({ ...instruction });
    return await db('recipe_instructions')
  }
  catch(err) {
    return false;
  }
};