const routes = require('express').Router();
const UserController = require('../controllers/userController')
const CarController = require('../controllers/carController')


//ROUTING REGISTER & LOGIN USER

routes.get('/buy/:id', UserController.buy)
routes.post('/buy/:id', UserController.buyPost)

//HALAMAN UTAMA JADI SATU SAMA ADMIN
routes.get('/cars', CarController.carUserFindAll)


module.exports = routes;