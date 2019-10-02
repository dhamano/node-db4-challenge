exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: "Pork Butt" },
    { ingredient_name: "Hawaiian Salt" },
    { ingredient_name: "Liquid Smoke" },
    { ingredient_name: "Ti Leaves" },
    { ingredient_name: "Ground Chuck" },
    { ingredient_name: "Fresh Basil" },
    { ingredient_name: "Mozzarella Cheese" },
    { ingredient_name: "Salt" },
    { ingredient_name: "Black Pepper" },
    { ingredient_name: "Sweet Onion" },
    { ingredient_name: "Ripe Tomato" },
    { ingredient_name: "Chuck Steak"},
    { ingredient_name: "Onion Soup Mix"},
    { ingredient_name: "Beer"},
  ]);
};