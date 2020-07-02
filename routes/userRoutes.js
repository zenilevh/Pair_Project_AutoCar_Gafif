const routes = require('express').Router();
const UserController = require('../controllers/userController')
const CarController = require('../controllers/carController')


//ROUTING REGISTER & LOGIN USER
routes.get('/register', UserController.register)
routes.post('/register', UserController.registerPost)
routes.get('/login', UserController.login)
routes.post('/login', UserController.loginPost)
routes.get('/logout', UserController.logout)

//HALAMAN UTAMA JADI SATU SAMA ADMIN
routes.get('/cars', CarController.userFindAll)


module.exports = routes;