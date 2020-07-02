const routes = require('express').Router();
const userRoutes = require('./userRoutes');
const adminRoutes = require('./adminRoutes');

const CarController = require('../controllers/carController')
const AdminController = require('../controllers/AdminController')
const UserController = require('../controllers/userController')

routes.get('/', CarController.getHome);

function checkSessionUser(req, res, next){
    if (req.session.user) {
        next()
    } else {
        res.send(`Unauthorized!`)
    }
}
function checkSessionAdmin(req, res, next){
    if (req.session.admin) {
        next()
    } else {
        res.send(`Unauthorized!`)
    }
}

//FOR USER
routes.use(checkSessionUser) //==CEK SESI USER

routes.use('/user', userRoutes);
routes.get('/invoices', UserController.invoices);

//FOR ADMIN
routes.use(checkSessionAdmin) //==CEK SESI ADMIN

routes.use('/admin', adminRoutes);
routes.get('/invoices', AdminController.invoices);

module.exports = routes;