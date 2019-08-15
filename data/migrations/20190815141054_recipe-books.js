
exports.up = function(knex) {
  return knex.schema.createTable('recipe_books', tbl => {
    tbl.increments();
    tbl.string('book_name', 255)
        .notNullable()
        .unique();
  })
  .createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('recipe_name')
        .notNullable()
        .unique();
    tbl.integer('servings')
        .notNullable();
  })
  .createTable('book_recipes', tbl => {
    tbl.increments();
    tbl.integer('book_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe_books')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('ingredient_name', 255)
        .notNullable()
        .unique();
  })
  .createTable('recipe_ingredients', tbl => {
    tbl.increments();
    tbl.integer('quantity')
    tbl.string('measurement', 255)
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })
  .createTable('instructions', tbl => {
    tbl.increments();
    tbl.integer('step')
        .notNullable();
    tbl.string('description', 255)
        .notNullable();
  })
  .createTable('recipe_instructions', tbl => {
    tbl.increments();
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    tbl.integer('instructions_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('instructions')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_instructions')
      .dropTableIfExists('instructions')
      .dropTableIfExists('recipe_ingredients')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('book_recipes')
      .dropTableIfExists('recipes')
      .dropTableIfExists('recipe_books')
};
