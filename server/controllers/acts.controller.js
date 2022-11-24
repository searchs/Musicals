const actsModel = require('../models/acts.model');

function postAct(req, res) {
  if (!req.body.title) {
    return res.status(400).json({
      error: 'Missing event title'
    });
  }
  const newAct = {
    title: req.body.title,
    id: actsModel.length
  };

  actsModel.push(newAct);
  res.json(newAct);
}

function getActs(req, res) {
  res.json(actsModel);
}

function getAct(req, res) {
  console.log(req);
  const actsId = Number(req.params.actsId);
  console.log(actsId);

  const act = actsModel.filter((ac) => ac.id === actsId);
  if (act && act.length) {
    res.status(200).json(act);
  } else {
    return res.status(404).json({
      error: `ActsId ${actsId} does not exists`
    });
  }
}

module.exports = {
  getActs,
  getAct,
  postAct
};
