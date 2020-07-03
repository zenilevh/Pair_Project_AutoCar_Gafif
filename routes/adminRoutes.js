const routes = require('express').Router();
const AdminController = require('../controllers/AdminController')
const CarController = require('../controllers/carController')
// const Controller = require('../controllers/userController');

// routes.get('/', Controller.findHome);

routes.get('/userList/:id', AdminController.userList)
routes.get('/cars/add', AdminController.addForm)
routes.post('/cars/add', AdminController.addPost)
routes.get('/cars/edit/:id', AdminController.editForm)
routes.post('/cars/edit/:id', AdminController.editPost)
routes.get('/cars/delete/:id', AdminController.delete)
routes.get('/invoice', AdminController.invoices)
routes.post('/invoice', AdminController.invoicePost)

//HALAMAN UTAMA JADI SATU SAMA USER
routes.get('/cars', CarController.carAdminFindAll)


module.exports = routes;