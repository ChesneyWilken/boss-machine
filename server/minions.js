const minionsRouter = require('express').Router();

module.exports = minionsRouter;

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId
} = require('./db');

minionsRouter.param('minionId', (req, res, next, id) => {
  const minion = getAllFromDatabase('minions', id);
  if(minion) {
    req.minion = minion;
    res.send(minion);
    next();
  } else {
    res.status(404).send('Minion Not Found');
  }
});

minionsRouter.get('/', (req, res) => {
  const allMinions = getAllFromDatabase('minions');
  console.log(allMinions);
  res.send(allMinions);
});