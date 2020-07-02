const routes = require('express').Router();
const UserController = require('../controllers/userController')
const CarController = require('../controllers/carController')


//ROUTING REGISTER & LOGIN USER

routes.get('/buy', UserController.buy)
routes.get('/invoice', UserController.invoices)

//HALAMAN UTAMA JADI SATU SAMA ADMIN
routes.get('/cars', CarController.userFindAll)


module.exports = routes;