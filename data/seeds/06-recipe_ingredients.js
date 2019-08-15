exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 5, measurement: "Lbs" },
    { recipe_id: 1, ingredient_id: 2, quantity: 3, measurement: "Tbsp" },
    { recipe_id: 1, ingredient_id: 3, quantity: 2, measurement: "Tbsp" },
    { recipe_id: 1, ingredient_id: 4, quantity: 16, measurement: "Leaves" },
    { recipe_id: 2, ingredient_id: 5, quantity: 1.5, measurement: "Lbs" },
    { recipe_id: 2, ingredient_id: 6, quantity: 2, measurement: "Tsp" },
    { recipe_id: 2, ingredient_id: 7 },
    { recipe_id: 2, ingredient_id: 8 },
    { recipe_id: 2, ingredient_id: 9, quantity: 4, measurement: "Slices" },
    { recipe_id: 2, ingredient_id: 10, quantity: 8, measurement: "Large Leaves" },
    { recipe_id: 3, ingredient_id: 11, quantity: 2, measurement: "Lbs" },
    { recipe_id: 3, ingredient_id: 12, quantity: 1, measurement: "Envelope" },
    { recipe_id: 3, ingredient_id: 13, quantity: 1, measurement: "Can" },
  ]);
};
