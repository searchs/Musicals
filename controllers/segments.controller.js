const segmentsModel = require('../models/segments.model');

function postSegment(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing segment name'
    });
  }
  const newsegment = {
    name: req.body.name,
    id: segmentsModel.length
  };

  segmentsModel.push(newSegment);
  res.json(newSegment);
}

function getSegments(req, res) {
  res.json(segmentsModel);
}

function getSegment(req, res) {
  const segmentId = Number(req.params.segmentId);

  const segment = segmentsModel.filter((seg) => seg.id === segmentId);
  if (segment && segment.length) {
    res.status(200).json(segment);
  } else {
    return res.status(404).json({
      error: 'segment does not exists'
    });
  }
}

module.exports = {
  getSegments,
  getSegment,
  postSegment
};
