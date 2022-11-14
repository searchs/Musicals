const showsModel = require('../models/shows.model');

function postShow(req, res) {
  if (!req.body.title) {
    return res.status(400).json({
      error: 'Missing show title'
    });
  }
  const newShow = {
    title: req.body.title,
    id: showsModel.length
  };

  showsModel.push(newShow);
  res.json(newShow);
}

function getShows(req, res) {
  res.json(showsModel);
}

function getShow(req, res) {
  const showId = Number(req.params.showId);

  const show = showsModel.filter((ev) => ev.id === showId);
  if (show && show.length) {
    res.status(200).json(show);
  } else {
    return res.status(404).json({
      error: 'Show with ID does not exists'
    });
  }
}

module.exports = {
  getShows,
  getShow,
  postShow
};
