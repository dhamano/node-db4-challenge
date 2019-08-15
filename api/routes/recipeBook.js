const express = require('express');
const Books = require('../models/books-model');

const router = express.Router();

router.get('/', async (req, res) => {
  try{
    const books = await Books.find();
    console.log('books', books);
    if(books.length > 0) {
      res.status(200).json(books);
    } else {
      res.status(404).json({ message: 'There are currently no books' });
    }
  }
  catch(err) {
    res.status(500).json({ error: 'Failed to get books' })
  }
})

router.get('/:id/recipes', async (req, res) => {
  try {
    const { id } = req.params;
    const recipes = await Books.findBookRecipes(id);
    if(recipes.length > 0) {
      res.status(200).json(recipes);
    } else {
      res.status(404).json({ message: 'There are currently no recipes for that book' })
    }
  }
  catch (err) {
    res.status(500).json({ error: 'Failed to get book recipes' })
  }
})

module.exports = router;