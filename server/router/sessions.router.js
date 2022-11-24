const express = require('express');

const sessionsRouter = express.Router();
const sessionsController = require('../controllers/sessions.controller');

sessionsRouter.post('/', sessionsController.postSession);
sessionsRouter.get('/', sessionsController.getSessions);
sessionsRouter.get('/:sessionId', sessionsController.getSession);

module.exports = sessionsRouter;
