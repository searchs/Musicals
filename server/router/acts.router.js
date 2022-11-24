const express = require('express');

const actsRouter = express.Router();
const actsController = require('../controllers/acts.controller');

actsRouter.post('/', actsController.postAct);
actsRouter.get('/', actsController.getActs);
actsRouter.get('/:actsId', actsController.getAct);

module.exports = actsRouter;
