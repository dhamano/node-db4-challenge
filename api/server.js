const express = require('express');
const helmet = require('helmet');
const booksRouter = require('./routes/recipeBook');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/books', booksRouter);

server.get('/', (req, res) => {
  res.send('<h1>Five by Five</h1>');
})

module.exports = server;