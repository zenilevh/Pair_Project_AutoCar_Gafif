const { Invoice, Car, User } = require('../models')

class CarController {
    static getHome (req, res) {
        res.render('home.ejs')
    }

    adminFindAll () {

    }
    userFindAll () {

    }
}

module.exports = CarController;