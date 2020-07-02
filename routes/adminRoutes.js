const routes = require('express').Router();
const AdminController = require('../controllers/AdminController')
const CarController = require('../controllers/carController')
// const Controller = require('../controllers/userController');

// routes.get('/', Controller.findHome);

//ROUTING LOGIN ADMIN
routes.get('/login', AdminController.login)
routes.post('/login', AdminController.loginPost)
routes.get('/logout', AdminController.logout)
routes.get('/add', AdminController.addForm)
routes.get('/add', AdminController.addPost)
routes.get('/add', AdminController.editForm)
routes.get('/add', AdminController.editPost)
routes.get('/add', AdminController.invoices)

//HALAMAN UTAMA JADI SATU SAMA USER
routes.get('/cars', CarController.adminFindAll)


module.exports = routes;