exports.seed = function(knex, Promise) {
  return knex('book_recipes').insert([
    { book_id: 1, recipe_id: 1 },
    { book_id: 2, recipe_id: 2 },
    { book_id: 1, recipe_id: 3 },
  ]);
};
