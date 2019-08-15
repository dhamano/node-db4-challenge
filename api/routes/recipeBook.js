const express = require('express');
const Books = require('../models/books-model');

const router = express.Router();

router.get('/', async (req, res) => {
  try{
    const books = await Books.find();
    if(books.length > 0) {
      res.status(200).json(books);
    } else {
      res.status(404).json({ message: 'There are no books' });
    }
  }
  catch(err) {
    res.status(500).json({ error: 'Failed to get Books' })
  }
})

module.exports = router;