const express = require('express');

const segmentsRouter = express.Router();
const segmentsController = require('../controllers/segments.controller');

segmentsRouter.post('/', segmentsController.postSegment);
segmentsRouter.get('/', segmentsController.getSegments);
segmentsRouter.get('/:segmentId', segmentsController.getSegment);

module.exports = segmentsRouter;
