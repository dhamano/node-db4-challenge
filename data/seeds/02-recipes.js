exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { recipe_name: "Oven Kalua Pig", servings: 6 },
    { recipe_name: "Pizza Burgers", servings: 4 },
    { recipe_name: "Lazy Day Steak", servings: 3 }
  ]);
};