const express = require('express');

const showsRouter = express.Router();
const showsController = require('../controllers/shows.controller');

showsRouter.post('/', showsController.postShow);
showsRouter.get('/', showsController.getShows);
showsRouter.get('/:showId', showsController.getShow);

module.exports = showsRouter;
