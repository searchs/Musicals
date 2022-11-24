const characters = require('../models/characters.model');

const scenesModel = [
  {
    id: 1,
    title: 'Palace Day',
    duration: 10 || 0,
    status: ['Upcoming', 'Live', 'Ended'],
    parentAct: 1,
    castsCount: 6,
    castsList: [characters]
  },
  {
    id: 2,
    title: 'Graveside Evening',
    duration: 10 || 0,
    status: ['Upcoming', 'Live', 'Ended'],
    parentAct: 1,
    castsCount: 6,
    castsList: ['Adetutu', 'BabatundePriestess', 'Bilisi', 'Guard', '']
  },
  {
    id: 3,
    title: 'Upbeat Moment',
    duration: 5,
    anchor: 'Diane Prospers',
    status: 'Upcoming | Live | Ended'
  }
];

module.exports = scenesModel;
