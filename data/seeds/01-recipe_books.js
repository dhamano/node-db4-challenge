exports.seed = function(knex, Promise) {
  return knex('recipe_books').insert([
    { book_name: "Locals Only Cookbook" },
    { book_name: "Los Angeles Treats" }
  ]);
};
