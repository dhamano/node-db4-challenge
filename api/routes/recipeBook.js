const express = require('express');
const Books = require('../models/books-model');

const router = express.Router();

router.get('/', async (req, res) => {
  try{
    const books = await Books.find();
    if(books.length > 0) {
      res.status(200).json(books);
    } else {
      res.status(404).json({ message: 'There are currently no books' });
    }
  }
  catch(err) {
    res.status(500).json({ error: 'Failed to get books' });
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Books.findById(id);
    if(book.length > 0) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: 'The book your are looking for does not exist' });
    }
  }
  catch(err) {
    res.status(500).json({ error: 'Error getting book with id ${id} from database' });
  }
})

router.get('/:id/recipes', async (req, res) => {
  try {
    const { id } = req.params;
    const recipes = await Books.findBookRecipes(id);
    if(recipes.length > 0) {
      res.status(200).json(recipes);
    } else {
      res.status(404).json({ message: 'There are currently no recipes for that book' });
    }
  }
  catch (err) {
    res.status(500).json({ error: 'Failed to get book recipes' });
  }
})

router.post('/', bookCheck, async (req, res) => {
  try {
    const book = await Books.add(req.body);
    const bookInfo = await Books.findById(book[0]);
    res.status(200).json(bookInfo);
  }
  catch(err) {
    res.status(500).json({ error: 'Error adding book to database' });
  }
})

router.put('/:id', bookCheck, async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Books.update(req.body, id);
    if(book) {
      const bookInfo = await Books.findById(id);
      res.status(200).json(bookInfo);
    } else {
      res.status(400).json({ error: `The book with id ${id} does not exist` });
    }
  }
  catch(err) {
    res.status(500).json({ error: 'Error updating book to database' });
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const didDelete = await Books.remove(id);
    console.log('didDelete', didDelete);
    if(didDelete) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: `A book with id ${id} does not exist.` });
    }
  }
  catch(err) {
    res.status(500).json({ error: 'Error deleting from the database.' });
  }
})

// Middleware Checks

function bookCheck(req, res, next) {
  const bookName = req.body.book_name;
  if( bookName === undefined || bookName.trim() === '' ) {
    res.status(400).json({ error: 'Book name is required' });
  } else {
    next();
  }
}

module.exports = router;