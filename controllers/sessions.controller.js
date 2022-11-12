const sessionsModel = require('../models/sessions.model');

function postSession(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing session name'
    });
  }
  const newsession = {
    name: req.body.name,
    id: sessionsModel.length
  };

  sessionsModel.push(newSession);
  res.json(newSession);
}

function getSessions(req, res) {
  res.json(sessionsModel);
}

function getSession(req, res) {
  const sessionId = Number(req.params.sessionId);

  const session = sessionsModel.filter((se) => se.id === sessionId);
  if (session && session.length) {
    res.status(200).json(session);
  } else {
    return res.status(404).json({
      error: 'Session does not exists'
    });
  }
}

module.exports = {
  getSessions,
  getSession,
  postSession
};
