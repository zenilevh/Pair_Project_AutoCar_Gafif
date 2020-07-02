const routes = require('express').Router();
const Controller = require('../controllers/userController');

routes.get('/', Controller.findHome);

module.exports = routes;