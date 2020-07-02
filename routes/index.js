const routes = require('express').Router();
const Controller = require('../controllers/userController');
const userRoutes = require('./userRoutes');
const adminRoutes = require('./adminRoutes');

routes.get('/', Controller.findHome);
routes.get('/invoices', Controller.invoices);

routes.use('/user', userRoutes);
routes.use('/admin', adminRoutes);

module.exports = routes;