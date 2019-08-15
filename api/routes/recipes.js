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
    res.status(200).json(instructions);
  }
  catch(err) {
    res.status(500).json({ error: `Failed to get instructions for recipe with id ${id}` });
  }
})

module.exports = router;