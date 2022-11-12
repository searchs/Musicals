const express = require('express');

const eventsRouter = express.Router();
const eventsController = require('../controllers/events.controller');

eventsRouter.post('/', eventsController.postEvent);
eventsRouter.get('/', eventsController.getEvents);
eventsRouter.get('/:eventId', eventsController.getEvent);

module.exports = eventsRouter;
