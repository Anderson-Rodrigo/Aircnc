const express = require('express');
const SessionController = require('../controllers/SessionController');
const Spotontroller = require('../controllers/SpotController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);
routes.post('/spots', Spotontroller.store);

module.exports = routes;    