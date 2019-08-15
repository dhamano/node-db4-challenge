exports.seed = function(knex, Promise) {
  return knex('recipe_instructions').insert([
    { recipe_id: 1, instructions_id: 1 },
    { recipe_id: 1, instructions_id: 2 },
    { recipe_id: 1, instructions_id: 3 },
    { recipe_id: 1, instructions_id: 4 },
    { recipe_id: 1, instructions_id: 5 },
    { recipe_id: 1, instructions_id: 6 },
    { recipe_id: 1, instructions_id: 7 },
    { recipe_id: 1, instructions_id: 8 },
    { recipe_id: 2, instructions_id: 9 },
    { recipe_id: 2, instructions_id: 10 },
    { recipe_id: 2, instructions_id: 11 },
    { recipe_id: 2, instructions_id: 12 },
    { recipe_id: 2, instructions_id: 13 },
    { recipe_id: 3, instructions_id: 14 },
    { recipe_id: 3, instructions_id: 15 },
    { recipe_id: 3, instructions_id: 16 },
  ]);
};
