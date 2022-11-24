const eventsModel = require('../models/events.model');

function postEvent(req, res) {
  if (!req.body.title) {
    return res.status(400).json({
      error: 'Missing event title'
    });
  }
  const newEvent = {
    title: req.body.title,
    id: eventsModel.length
  };

  eventsModel.push(newEvent);
  res.json(newEvent);
}

function getEvents(req, res) {
  res.json(eventsModel);
}

function getEvent(req, res) {
  const eventId = Number(req.params.eventId);

  const event = eventsModel.filter((ev) => ev.id === eventId);
  if (event && event.length) {
    res.status(200).json(event);
  } else {
    return res.status(404).json({
      error: 'Event does not exists'
    });
  }
}

module.exports = {
  getEvents,
  getEvent,
  postEvent
};
