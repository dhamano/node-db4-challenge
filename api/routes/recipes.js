const express = require('express');
const Recipes = require('../models/recipe-model');

const router = express.Router();

router.get('/', async (req, res) => {
  try{
    const recipes = await Recipes.find();
    if(recipes.length > 0) {
      res.status(200).json(recipes);
    } else {
      res.status(404).json({ message: 'There are currently no recipes' });
    }
  }
  catch(err) {
    res.status(500).json({ error: 'Failed to get recipes' })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try{
    const recipe = await Recipes.findById(id);
    if(recipe.length > 0) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: 'There are currently no recipes' });
    }
  }
  catch(err) {
    res.status(500).json({ error: 'Failed to get recipes' })
  }
})

router.get('/:id/ingredients', async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await Recipes.getRecipeIngredients(id);
    res.status(200).json(recipe);
  }
  catch(err) {
    res.status(500).json({ error: `Failed to get recipe with id ${id}` })
  }
})

router.get('/:id/instructions', async (req, res) => {
  const { id } = req.params;
  try {
    const instructions = await Recipes.getRecipeInstructions(id);
    if(instructions.length > 0) {
      res.status(200).json(instructions);
    } else {
      res.status(404).json({ message: 'There are no instructions for this recipe yet' });
    }
  }
  catch(err) {
    res.status(500).json({ error: `Failed to get instructions for recipe with id ${id}` });
  }
})

router.post('/', recipeCheck, async (req, res) => {
  try {
    const recipe = await Recipes.add(req.body);
    const recipeInfo = await Recipes.findById(recipe[0]);
    res.status(200).json(recipeInfo);
  }
  catch(err) {
    res.status(500).json({ error: 'Error adding recipe to database' });
  }
})

router.post('/:id/instructions', checkInstructions, async (req, res) => {
  const { id } = req.params;
  try {
    const instruction = await Recipes.addInstruction(req.body, id);
    console.log('instruction',instruction);
    if(instruction) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: 'There wasn an error adding the instruction to the database' });
    }
  }
  catch(err) {
    res.status(500).json({ error: 'There was a problem adding the instruction to the database.'});
  }
})

// Middleware Checks

function recipeCheck(req, res, next) {
  const recipeName = req.body.recipe_name;
  if( recipeName === undefined || recipeName.trim() === '' ) {
    res.status(400).json({ error: 'Recipe name is required' });
  } else {
    next();
  }
}

function checkInstructions(req, res, next) {
  const { step } = req.body;
  const { description } = req.body;
  const { recipe_id } = req.body;
  let missing = 0;
  if( step === undefined || step === 0) { missing++; }
  if( description === undefined || description.trim() === "" ) { missing = missing + 2; }
  if( recipe_id === undefined || recipe_id === 0) { missing = missing + 4; console.log('missing recipe_id'); }
  switch(missing) {
    case 1:
      return res.status(400).json({ error: 'You are missing the step number' });
    case 2:
      return res.status(400).json({ error: 'You are missing the step description/explaination' });
    case 3:
      return res.status(400).json({ error: 'You are missing the step number and description/explaination' });
    case 4:
      return res.status(400).json({ error: 'You are missing the recipe_id' });
    case 5:
      return res.status(400).json({ error: 'You are missing the step number and recipe_id' });
    case 6:
      return res.status(400).json({ error: 'You are missing the step description and recipe_id' });
    case 7:
      return res.status(400).json({ error: 'You are missing the step number, description, and recipe_id' });
    default:
      next();
  }
}

module.exports = router;