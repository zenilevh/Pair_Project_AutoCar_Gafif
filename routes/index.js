const routes = require('express').Router();
const userRoutes = require('./userRoutes');
const adminRoutes = require('./adminRoutes');

const CarController = require('../controllers/carController')
const AdminController = require('../controllers/AdminController')
const UserController = require('../controllers/userController')

routes.get('/', CarController.getHome);

function checkSession(req, res, next){
    if (req.session.user || req.session.admin) {
        next()
    } else {
        res.send(`Unauthorized!`)
    }
}

//ROUTING REGISTER & LOGIN USER
routes.get('/register', UserController.register)
routes.post('/register', UserController.registerPost)
routes.get('/user/login', UserController.login)
routes.post('/user/login', UserController.loginPost)
routes.get('/user/logout', UserController.logout)

//ROUTING LOGIN ADMIN
routes.get('/secret/register', AdminController.register)
routes.post('/secret/register', AdminController.registerPost)
routes.get('/admin/login', AdminController.login)
routes.post('/admin/login', AdminController.loginPost)
routes.get('/admin/logout', AdminController.logout)

routes.use(checkSession)

routes.use('/user', userRoutes);
routes.use('/admin', adminRoutes);

module.exports = routes;