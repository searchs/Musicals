const scenesModel = require('../models/scenes.model');

function postScene(req, res) {
  if (!req.body.title) {
    return res.status(400).json({
      error: 'Missing scene title'
    });
  }
  const newScene = {
    title: req.body.title,
    id: scenesModel.length
  };

  scenesModel.push(newScene);
  res.json(newScene);
}

function getScenes(req, res) {
  res.json(scenesModel);
}

function getScene(req, res) {
  const sceneId = Number(req.params.sceneId);

  const scene = scenesModel.filter((sc) => sc.id === sceneId);
  if (scene && scene.length) {
    res.status(200).json(scene);
  } else {
    return res.status(404).json({
      error: `SceneID ${sceneId} does not exists`
    });
  }
}

module.exports = {
  getScenes,
  getScene,
  postScene
};
