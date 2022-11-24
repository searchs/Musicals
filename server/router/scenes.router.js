const express = require('express');

const scenesRouter = express.Router();
const scenesController = require('../controllers/scenes.controller');

scenesRouter.post('/', scenesController.postScene);
scenesRouter.get('/', scenesController.getScenes);
scenesRouter.get('/:sceneId', scenesController.getScene);

module.exports = scenesRouter;
